import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [CommonModule, FormsModule,   MatSlideToggleModule],
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent {
  selectedTab: string = 'dashboard';  // Default active tab
  autosave: boolean = false;
  pinView: boolean = false;
  privateView: boolean = false;
  protectedView: boolean = false;
  defaultView: boolean = false;

  isStatusVisible: boolean = false;
  isTagsVisible: boolean = false;
  isDueDateVisible: boolean = false;

  // Function to set the active tab
  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }

  toggleFilter(filter: string) {
    if (filter === 'status') {
      this.isStatusVisible = !this.isStatusVisible;
    } else if (filter === 'tags') {
      this.isTagsVisible = !this.isTagsVisible;
    } else if (filter === 'dueDate') {
      this.isDueDateVisible = !this.isDueDateVisible;
    }
  }


  // Prevent page refresh on click (if necessary for some dropdown items)
  preventRefreshingThePage(event: Event): void {
    event.preventDefault();
  }

  // Handle applying a filter (if any)
  applyFilter(filterType: string): void {
    console.log(`Filter applied: ${filterType}`);
  }

  // Handle search input
  onSearch(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    console.log(`Search input: ${input}`);
  }

  // Handle adding a nested filter
  addNestedFilter(): void {
    console.log('Adding nested filter');
  }

  // Handle adding a filter
  addFilter(): void {
    console.log('Adding filter');
  }
}
