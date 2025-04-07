import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {LayoutOptionsComponent} from '../layout-options/layout-options.component';
import {FieldsComponent} from '../fields/fields.component';
import {FilterComponent} from '../filter/filter.component';
import {GroupsComponent} from '../groups/groups.component';

@Component({
  selector: 'app-tab-menu',
  imports: [CommonModule, FormsModule, MatSlideToggleModule, LayoutOptionsComponent, FieldsComponent, FilterComponent, GroupsComponent],
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }
  searchQuery: string = '';
  selectedTab: string = 'dashboard';
  autosave = false;
  pinView = false;
  privateView = false;
  protectedView = false;
  defaultView = false;
  selectedOption = 'Collapsed';
  activePanel = 'homeFields';
  favoriteName = '';



  exportOptionsList = [
    { icon: '', name: 'Visible columns' },
    { icon: '', name: 'Task Names Only' },
    { icon: '', name: 'All columns' }
  ];

  fileFormat = [
    { icon: '', name: 'CSV' },
    { icon: '', name: 'Excel' }
  ];

  dateFormat = [
    { icon: '', name: 'Normal' },
    { icon: '', name: 'ISO' },
    { icon: '', name: 'POSIX' }
  ];

  timeFormat = [
    { icon: '', name: 'Normal' },
    { icon: '', name: 'hh:mm' },
    { icon: '', name: 'hh:mm:ss' }
  ];

  users = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' }
  ];

  notifications = [
    { id: '1', name: 'On due date' },
    { id: '2', name: '10 minutes before' },
    { id: '3', name: '1 hour before' },
    { id: '4', name: 'Custom' },
    { id: '5', name: 'Dont notify' }
  ];

  reminder = {
    description: '',
    time: '',
    assignedUser: '',
    notification: ''
  };

  optionsList: string[] = ['Status', 'Tags', 'Due Date', 'Priority', 'Add filter'];
  filteredOptions: string[] = [...this.optionsList];
  // isDropdownVisible = false;

  addTable() {
    const modalContent = document.getElementById("modalContent");
    if (modalContent) {
      modalContent.innerHTML = `
        <button class="btn btn-light btn-sm w-100 text-start">+</button>
        <table class="table table-bordered mt-2">
          <tr>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
          </tr>
          <tr>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
          </tr>
        </table>
      `;
    }
  }

  onSearch(): void {
    console.log('Search initiated for:', this.searchQuery);
  }

  openPanel(panelName: string): void {
    this.activePanel = panelName;
  }

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }

  selectOption(option: string, event: Event): void {
    event.preventDefault();
    this.selectedOption = option;
  }

  preventRefreshingThePage(event: Event): void {
    event.preventDefault();
  }

  saveFavorite(): void {
    console.log('Favorite saved:', this.favoriteName);
  }

  // filterOptions(event: Event): void {
  //   const searchValue = (event.target as HTMLInputElement).value.toLowerCase();
  //   this.filteredOptions = this.optionsList.filter(option =>
  //     option.toLowerCase().includes(searchValue)
  //   );
  //   console.log("Filtering options for:", searchValue);
  // }

  // togglePane(): void {
  //   this.filteredOptions = this.optionsList.filter(option =>
  //     option.toLowerCase().includes(this.searchQuery.toLowerCase())
  //   );
  // }

  // showDropdown(): void {
  //   this.isDropdownVisible = true;
  // }
  //
  // closeDropdown(): void {
  //   this.isDropdownVisible = false;
  // }

  resizeTextarea(event: any): void {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
  }

  saveReminder(): void {
    console.log(this.reminder);
    // Logic to save reminder
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const dropdown = document.querySelector('.options-box') as HTMLElement;
      if (dropdown) {
        const dropdownRect = dropdown.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        if (dropdownRect.right > windowWidth) {
          dropdown.style.left = `${windowWidth - dropdownRect.width}px`;
        }
      }
    }
  }
}
