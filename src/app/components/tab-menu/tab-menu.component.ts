import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule],
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
  selectedOption: string = 'Collapsed';
  activePanel: string = 'homeFields';
  fieldVisible: boolean = false;

  openPanel(panelName: string): void {
    this.activePanel = panelName;
  }

  fields: { icon: string, name: string, enabled: boolean }[] = [
    { icon: 'bi-person', name: 'Assignee', enabled: true },
    { icon: 'bi-caret-down-square', name: 'Phase', enabled: true },
    { icon: 'bi-caret-down-square', name: 'Created By', enabled: true },
    { icon: 'bi-caret-down-square', name: 'UX - Status', enabled: true },
    { icon: 'bi-caret-down-square', name: 'Development Status', enabled: true },
    { icon: 'bi-caret-down-square', name: 'Overall Status', enabled: true },
    { icon: 'bi-flag', name: 'Priority', enabled: true },
    { icon: 'bi-calendar3', name: 'Due date', enabled: true },
    { icon: 'bi-caret-down-square', name: 'Type', enabled: true },
    { icon: 'bi-star', name: 'Effort', enabled: true },
    { icon: 'bi-hash', name: 'Sequence', enabled: true }
  ];

  layouts: {  name: string, enabled: boolean }[] = [
    {  name: 'Show empty statuses', enabled: true },
    {  name: 'Pin Description', enabled: true },
    {name: 'Wrap Text', enabled: true },
    { name: 'Task location', enabled: true },
    {  name: 'Task properties', enabled: true },
    { name: 'Task locations', enabled: true },
    { name: 'Task properties', enabled: true },
    { name: 'Subtask parent names', enabled: true },

  ];

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
      if (dropdown) {
        const dropdownRect = dropdown.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        if (dropdownRect.right > windowWidth) {
          dropdown.style.left = `${windowWidth - dropdownRect.width}px`;
        }
      }
    }
  }


  preventRefreshingThePage(event: Event): void {
    event.preventDefault();
  }

  selectOption(option: string, event: Event): void {
    event.preventDefault();
    this.selectedOption = option;
  }
}
