import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  selectedFilterValues: { [key: string]: string | string[] } = {};

  confirmStatusFilter() {
    this.selectedStatusOptions = Object.entries(this.checkboxModel)
      .filter(([_, checked]) => checked)
      .map(([option]) => option);

    // Save selected values to global filter state
    this.selectedFilterValues['Status'] = [...this.selectedStatusOptions];

    this.showStatusDropdown = false;
  }
  optionsList: string[] = [
    'Status', 'Tags', 'Due Date', 'Priority', 'Assignee', 'Archived',
    'Assigned comments', 'Created by', 'Date closed', 'Date created', 'Date updated', 'Date done',
    'Dependency', 'Duration', 'Location', 'Recurring', 'Start date', 'Status is closed',
    'Time estimate', 'Time tracked', 'Sprint Points', 'Watcher', 'Milestone',
    'Custom Fields', 'Task type', 'Last status change', 'Custom Relationships'
  ];

  filterOptionsMap: any = {
    Status: ['Active', 'Done', 'Closed'],
    Tags: ['#3cx', '#anglo', '#c-care', '#estateagent', '#leadl3920', '#projectmgt','#servicedes', '#simphr', '#ticketingsaas', '#ux'],
    DueDate: ['Today', 'Yesterday', 'Tomorrow', 'Next 7 Days', 'Last 7 Days', 'This week','Next week', 'Last Month',
      'This Month', 'Next Month', 'Today & Earlier', 'Last Quarter', 'This quarter', 'Next quarter', 'Overdue',
    'Later than Today', 'Last', 'Next', 'Next year', 'This year', 'Last year', 'Last week', 'Exact Date', 'Before Date', 'After Date',
      'Date Range', 'Any Date', 'No Date'],
    Priority: [
      { label: 'Urgent', icon: 'bi-flag-fill', color: '#e53935' },
      { label: 'High', icon: 'bi-flag-fill', color: '#fbc02d' },
      { label: 'Normal', icon: 'bi-flag-fill', color: '#1e88e5' },
      { label: 'Low', icon: 'bi-flag-fill', color: '#9e9e9e' },
      { label: 'No Priority', icon: 'bi-flag', color: '#f8f4f4' }]


  };

  filteredOptions: string[] = [...this.optionsList];
  isDropdownVisible = false;
  selectedFilter: string | null = null;
  selectedStatusOption: string | null = null;


  clearFilters() {
    this.selectedFilter = null;
    this.selectedStatusOption = null;
    console.log("Filters cleared");
  }

  filterOptions(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredOptions = this.optionsList.filter(option =>
      option.toLowerCase().includes(searchValue)
    );
  }

  showDropdown() {
    this.isDropdownVisible = true;
  }

  selectFilter(option: string, event: MouseEvent) {
    event.preventDefault();
    this.selectedFilter = option;
    this.isDropdownVisible = false;
  }



  preventRefreshingThePage(event: Event): void {
    event.preventDefault();
  }
  showStatusDropdown = false;

  toggleStatusDropdown(event: Event): void {
    event.stopPropagation(); // Prevent bubbling
    this.showStatusDropdown = !this.showStatusDropdown;
  }

  selectedStatusOptions: string[] = [];
  checkboxModel: { [key: string]: boolean } = {};

//   Tags

  showTagsDropdown = false;
  selectedTagsOptions: string[] = [];
  tagsCheckboxModel: { [key: string]: boolean } = {};

  toggleTagsDropdown(event: Event): void {
    event.stopPropagation();
    this.showTagsDropdown = !this.showTagsDropdown;
  }

  confirmTagsFilter() {
    this.selectedTagsOptions = Object.entries(this.tagsCheckboxModel)
      .filter(([_, checked]) => checked)
      .map(([option]) => option);
    this.showTagsDropdown = false;
  }
  tagsCondition: string = 'is'; // or 'is_not'

  toggleTagSelection(option: string) {
    const index = this.selectedTagsOptions.indexOf(option);
    if (index > -1) {
      this.selectedTagsOptions.splice(index, 1);
    } else {
      this.selectedTagsOptions.push(option);
    }
  }

//   Priority

  showPriorityDropdown = false;
  selectedPriorityOptions: string[] = [];
  PriorityCheckboxModel: { [key: string]: boolean } = {};

  togglePriorityDropdown(event: Event): void {
    event.stopPropagation();
    this.showPriorityDropdown = !this.showPriorityDropdown;
  }

  confirmPriorityFilter() {
    this.selectedPriorityOptions = Object.entries(this.PriorityCheckboxModel)
      .filter(([_, checked]) => checked)
      .map(([label]) =>
        this.filterOptionsMap['Priority'].find((option: { label: string; }) => option.label === label)!
      );

    this.showPriorityDropdown = false;
  }

  getSelectedPriorityLabels(): string {
    return this.selectedPriorityOptions
      .map(label => {
        const match = this.filterOptionsMap['Priority'].find((opt: { label: string; }) => opt.label === label);
        return match ? match.label : label;
      })
      .join(', ');
  }

    PriorityCondition: string = 'is'; // or 'is_not'

  togglePrioritySelection(option: string) {
    const index = this.selectedPriorityOptions.indexOf(option);
    if (index > -1) {
      this.selectedPriorityOptions.splice(index, 1);
    } else {
      this.selectedPriorityOptions.push(option);
    }
  }

  //  DueDate

  showDueDateDropdown = false;
  selectedDueDateOptions: string[] = [];
  DueDateCheckboxModel: { [key: string]: boolean } = {};

  toggleDueDateDropdown(event: Event): void {
    event.stopPropagation();
    this.showDueDateDropdown = !this.showDueDateDropdown;
  }

  confirmDueDateFilter() {
    this.selectedDueDateOptions = Object.entries(this.DueDateCheckboxModel)
      .filter(([_, checked]) => checked)
      .map(([option]) => option);
    this.showDueDateDropdown = false;
  }
  DueDateCondition: string = 'is'; // or 'is_not'

  toggleDueDateSelection(option: string) {
    const index = this.selectedDueDateOptions.indexOf(option);
    if (index > -1) {
      this.selectedDueDateOptions.splice(index, 1);
    } else {
      this.selectedDueDateOptions.push(option);
    }
  }

}
