import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-filter',
  imports: [
    CommonModule
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  optionsList: string[] = ['Status', 'Tags', 'Due Date', 'Priority', 'Assignee', 'Archived', 'Assigned comments', 'Created by', 'Date closed',
    'Date created', 'Date updated', 'Date done', 'Dependency', 'Duration', 'Location', 'Recurring', 'Start date', 'Status is closed',
  'Time estimate', 'Time tracked','Sprint Points','Watcher', 'Milestone', 'Custom Fields','Task type','Last status change', 'Custom Relationships'];
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

  preventRefreshingThePage(event: Event): void {
    event.preventDefault();
  }

}
