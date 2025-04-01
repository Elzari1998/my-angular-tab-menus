import {AfterViewInit, Component, Inject, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {FormsModule} from "@angular/forms";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [CommonModule, FormsModule,   MatSlideToggleModule],
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  selectedTab: string = 'dashboard';  // Default active tab
  autosave: boolean = false;
  pinView: boolean = false;
  privateView: boolean = false;
  protectedView: boolean = false;
  defaultView: boolean = false;
  selectedOption:string = 'Collapsed'

  // Function to set the active tab
  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }

  optionsList: string[] = ['Status', 'Tags', 'Due Date', 'Priority', 'Add filter'];
  filteredOptions: string[] = [...this.optionsList];
  isDropdownVisible = false;

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
  clearFilters() {
    console.log("Filters cleared");
  }


  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const dropdown = document.querySelector('.options-box') as HTMLElement;
      const dropdownRect = dropdown.getBoundingClientRect();
      const windowWidth = window.innerWidth;


      if (dropdownRect.right > windowWidth) {
        dropdown.style.left = `${windowWidth - dropdownRect.width}px`; // Move to the left if it's overflowing
      }
    }
  }
  // Prevent page refresh on click (if necessary for some dropdown items)
  preventRefreshingThePage(event: Event): void {
    event.preventDefault();
  }

  selectOption(option: string, event:Event): void {
    event.preventDefault();
    this.selectedOption = option;
  }



}
