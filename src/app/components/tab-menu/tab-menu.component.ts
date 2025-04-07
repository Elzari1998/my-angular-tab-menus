import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {LayoutOptionsComponent} from '../layout-options/layout-options.component';
import {FieldsComponent} from '../fields/fields.component';
import {FilterComponent} from '../filter/filter.component';

@Component({
  selector: 'app-tab-menu',
  imports: [CommonModule, FormsModule, MatSlideToggleModule, LayoutOptionsComponent, FieldsComponent, FilterComponent],
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

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

  searchQuery: string = '';

  onSearch(): void {
    console.log('Search initiated for:', this.searchQuery);

  }

  selectedTab: string = 'dashboard';  // Default active tab
  autosave: boolean = false;
  pinView: boolean = false;
  privateView: boolean = false;
  protectedView: boolean = false;
  defaultView: boolean = false;
  selectedOption: string = 'Collapsed';
  activePanel: string = 'homeFields';

  groupList:{icon:string, name:string}[] =[
    {icon:' ', name : 'Status' },
    {icon:' ', name : 'Assignee' },
    {icon:' ', name : 'Priority' },
    {icon:' ', name : 'Tags' },
    {icon:' ', name : 'Due date' },
    {icon:' ', name : 'Task Type' },
    {icon:' ', name : 'UX - Status' },
    {icon:' ', name : 'User stories - Status' },
  ]
exportOptionsList  = [
  {icon:'', name: 'Visible columns'},
  {icon:'', name: 'Task Names Only'},
  {icon:'', name: 'All columns'}

]
  fileFormat = [
    {icon:'', name: 'CSV'},
    {icon:'', name: 'Excel'},
  ]
  dateFormat = [
    {icon:'', name: 'Normal'},
    {icon:'', name: 'ISO'},
    {icon:'', name: 'POSIX'},
  ]
  timeFormat = [
    {icon:'', name: 'Normal'},
    {icon:'', name: 'hh:mm'},
    {icon:'', name: 'hh:mm:ss'},
  ]


  openPanel(panelName: string): void {
    this.activePanel = panelName;
  }


  // Function to set the active tab
  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }

  ngAfterViewInit() {
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




  selectOption(option: string, event: Event): void {
    event.preventDefault();
    this.selectedOption = option;
  }

  preventRefreshingThePage(event: Event): void {
    event.preventDefault();
  }

  favoriteName: string = '';

  saveFavorite() {
    console.log('Favorite saved:', this.favoriteName);
  }



  optionsList: string[] = ['Status', 'Tags', 'Due Date', 'Priority', 'Add filter'];
  filteredOptions: string[] = [...this.optionsList];
  isDropdownVisible = false;

  clearFilters() {
    console.log("Filters cleared");
  }

  filterOptions(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value.toLowerCase();
    console.log("Filtering options for:", searchValue);

    this.filteredOptions = this.optionsList.filter(option =>
      option.toLowerCase().includes(searchValue)
    );
  }

  showDropdown() {
    this.isDropdownVisible = true;
  }

  closeDropdown() {
    this.isDropdownVisible = false;
  }


}
