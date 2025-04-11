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

    Tags: ['#3cx', '#anglo', '#c-care', '#estateagent', '#leadl3920', '#projectmgt', '#servicedes', '#simphr', '#ticketingsaas', '#ux'],

    DueDate: ['Today', 'Yesterday', 'Tomorrow', 'Next 7 Days', 'Last 7 Days', 'This week', 'Next week', 'Last Month',
      'This Month', 'Next Month', 'Today & Earlier', 'Last Quarter', 'This quarter', 'Next quarter', 'Overdue',
      'Later than Today', 'Last', 'Next', 'Next year', 'This year', 'Last year', 'Last week', 'Exact Date', 'Before Date', 'After Date',
      'Date Range', 'Any Date', 'No Date'],

    Priority: [
      {label: 'Urgent', icon: 'bi-flag-fill', color: '#e53935'},
      {label: 'High', icon: 'bi-flag-fill', color: '#fbc02d'},
      {label: 'Normal', icon: 'bi-flag-fill', color: '#1e88e5'},
      {label: 'Low', icon: 'bi-flag-fill', color: '#9e9e9e'},
      {label: 'No Priority', icon: 'bi-flag', color: '#f8f4f4'}],

    Assignee: [
      {label: 'Me', icon: 'bi bi-person-circle', color: '#121aba'},
      {label: 'Bhadvaraj', icon: 'bi bi-person-circle', color: '#580fac'},
      {label: 'Chantal', icon: 'bi bi-person-circle', color: '#e5781e'},
      {label: 'Shawn', icon: 'bi bi-person-circle', color: '#871c54'},
      {label: 'Tanja', icon: 'bi bi-person-circle', color: '#605858'}],

    Archived: ['Status', 'Tags', 'Due Date', 'Priority', 'Assignee', 'Archived',
      'Assigned comments', 'Created by', 'Date closed', 'Date created', 'Date updated', 'Date done',
      'Dependency', 'Duration', 'Location', 'Recurring', 'Start date', 'Status is closed',
      'Time estimate', 'Time tracked', 'Sprint Points', 'Watcher', 'Milestone',
      'Custom Fields', 'Task type'],

    AssignedComments: ['Status', 'Tags', 'Due Date', 'Priority', 'Assignee', 'Archived',
      'Assigned comments', 'Created by', 'Date closed', 'Date created', 'Date updated', 'Date done',
      'Dependency', 'Duration', 'Location', 'Recurring', 'Start date', 'Status is closed',
      'Time estimate', 'Time tracked', 'Sprint Points', 'Watcher', 'Milestone',
      'Custom Fields', 'Task type'],

    CreatedBy: [
      {label: 'Me', icon: 'bi bi-person-circle', color: '#121aba'},
      {label: 'Bhadvaraj', icon: 'bi bi-person-circle', color: '#580fac'},
      {label: 'Chantal', icon: 'bi bi-person-circle', color: '#e5781e'},
      {label: 'Shawn', icon: 'bi bi-person-circle', color: '#871c54'},
      {label: 'Tanja', icon: 'bi bi-person-circle', color: '#605858'}],

    DateClosed: ['Last', 'Next', 'Next year', 'This year', 'Last year', 'Last week', 'Exact Date', 'Before Date', 'After Date',
      'Date Range', 'Any Date', 'No Date'],

    DateCreated: ['Last', 'Next', 'Next year', 'This year', 'Last year', 'Last week', 'Exact Date', 'Before Date', 'After Date',
      'Date Range', 'Any Date', 'No Date'],

    DateUpdated: ['Last', 'Next', 'Next year', 'This year', 'Last year', 'Last week', 'Exact Date', 'Before Date', 'After Date',
      'Date Range', 'Any Date', 'No Date'],


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
  selectedPriorityOptions: PriorityOption[] = [];
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
    return this.selectedPriorityOptions.map(option => option.label).join(', ');
  }
  PriorityCondition: string = 'is'; // or 'is_not'

  togglePrioritySelection(option: PriorityOption) {
    const index = this.selectedPriorityOptions.findIndex(o => o.label === option.label);
    if (index > -1) {
      this.selectedPriorityOptions.splice(index, 1);
    } else {
      this.selectedPriorityOptions.push(option);
    }
  }

  //  DueDate

  showDueDateDropdown = false;
  selectedDueDateOptions: string[] = [];
  DueDateCondition: string = 'is'; // or 'is_not'

// Toggle dropdown open/close
  toggleDueDateDropdown(event: Event): void {
    event.stopPropagation();
    this.showDueDateDropdown = !this.showDueDateDropdown;

  }


// Single selection handler
  selectDueDate(option: string) {
    this.selectedDueDateOptions = [option];
    this.showDueDateDropdown = false; // Close dropdown after selecting
  }


  //   Assignee

  showAssigneeDropdown = false;
  selectedAssigneeOptions: AssigneeOption[] = [];
  AssigneeCheckboxModel: { [key: string]: boolean } = {};




  toggleAssigneeDropdown(event: Event): void {
    event.stopPropagation();
    this.showAssigneeDropdown = !this.showAssigneeDropdown;
  }

  confirmAssigneeFilter() {
    this.selectedAssigneeOptions = Object.entries(this.AssigneeCheckboxModel)
      .filter(([_, checked]) => checked)
      .map(([label]) =>
        this.filterOptionsMap['Assignee'].find((option: { label: string; }) => option.label === label)!
      );

    this.showAssigneeDropdown = false;

  }
getSelectedAssigneeLabels(): string {
  return this.selectedAssigneeOptions.map(option => option.label).join(', ');
}


  AssigneeCondition: string = 'is'; // or 'is_not'

  toggleAssigneeSelection(option: AssigneeOption) {
    const index = this.selectedAssigneeOptions.findIndex(o => o.label === option.label);
    if (index > -1) {
      this.selectedAssigneeOptions.splice(index, 1);
    } else {
      this.selectedAssigneeOptions.push(option);
    }
  }


  //  Archived

  showArchivedDropdown = false;
  selectedArchivedOptions: string[] = [];
  ArchivedCheckboxModel: { [key: string]: boolean } = {};

  toggleArchivedDropdown(event: Event): void {
    event.stopPropagation();
    this.showArchivedDropdown = !this.showArchivedDropdown;
  }

  confirmArchivedFilter() {
    this.selectedArchivedOptions = Object.entries(this.ArchivedCheckboxModel)
      .filter(([_, checked]) => checked)
      .map(([option]) => option);
    this.showArchivedDropdown = false;
  }

  ArchivedCondition: string = 'is'; // or 'is_not'

  toggleArchivedSelection(option: string) {
    const index = this.selectedArchivedOptions.indexOf(option);
    if (index > -1) {
      this.selectedArchivedOptions.splice(index, 1);
    } else {
      this.selectedArchivedOptions.push(option);
    }
  }

  // AssignedComments

  showAssignedCommentsDropdown = false;
  selectedAssignedCommentsOptions: string[] = [];
  AssignedCommentsCondition: string = 'is'; // or 'is_not'

// Toggle dropdown open/close
  toggleAssignedCommentsDropdown(event: Event): void {
    event.stopPropagation();
    this.showAssignedCommentsDropdown = !this.showAssignedCommentsDropdown;
  }

// Single selection handler
  selectAssignedComment(option: string) {
    this.selectedAssignedCommentsOptions = [option];
    this.showAssignedCommentsDropdown = false; // Close dropdown after selecting
  }


//   CreatedBy

  showCreatedByDropdown = false;
  selectedCreatedByOptions: PriorityOption[] = [];
  CreatedByCheckboxModel: { [key: string]: boolean } = {};

  toggleCreatedByDropdown(event: Event): void {
    event.stopPropagation();
    this.showCreatedByDropdown = !this.showCreatedByDropdown;
  }

  confirmCreatedByFilter() {
    this.selectedCreatedByOptions = Object.entries(this.CreatedByCheckboxModel)
      .filter(([_, checked]) => checked)
      .map(([label]) =>
        this.filterOptionsMap['CreatedBy'].find((option: { label: string; }) => option.label === label)!
      );

    this.showCreatedByDropdown = false;

  }

  getSelectedCreatedByLabels(): string {
    return this.selectedCreatedByOptions.map(option => option.label).join(', ');
  }

  CreatedByCondition: string = 'is'; // or 'is_not'

  toggleCreatedBySelection(option: CreatedByOption) {
    const index = this.selectedCreatedByOptions.findIndex(o => o.label === option.label);
    if (index > -1) {
      this.selectedCreatedByOptions.splice(index, 1);
    } else {
      this.selectedCreatedByOptions.push(option);
    }
  }

  //  DateClosed

  showDateClosedDropdown = false;
  selectedDateClosedOptions: string[] = [];
  DateClosedCondition: string = 'is'; // or 'is_not'

// Toggle dropdown open/close
  toggleDateClosedDropdown(event: Event): void {
    event.stopPropagation();
    this.showDateClosedDropdown = !this.showDateClosedDropdown;

  }

// Single selection handler
  selectDateClosed(option: string) {
    this.selectedDateClosedOptions = [option];
    this.showDateClosedDropdown = false; // Close dropdown after selecting
  }

  //  DateCreated

  showDateCreatedDropdown = false;
  selectedDateCreatedOptions: string[] = [];
  DateCreatedCondition: string = 'is'; // or 'is_not'

// Toggle dropdown open/close
  toggleDateCreatedDropdown(event: Event): void {
    event.stopPropagation();
    this.showDateCreatedDropdown = !this.showDateCreatedDropdown;

  }


// Single selection handler
  selectDateCreated(option: string) {
    this.selectedDateCreatedOptions = [option];
    this.showDateCreatedDropdown = false; // Close dropdown after selecting
  }

  //  DateUpdated

  showDateUpdatedDropdown = false;
  selectedDateUpdatedOptions: string[] = [];
  DateUpdatedCondition: string = 'is'; // or 'is_not'

// Toggle dropdown open/close
  toggleDateUpdatedDropdown(event: Event): void {
    event.stopPropagation();
    this.showDateUpdatedDropdown = !this.showDateUpdatedDropdown;

  }


// Single selection handler
  selectDateUpdated(option: string) {
    this.selectedDateUpdatedOptions = [option];
    this.showDateUpdatedDropdown = false; // Close dropdown after selecting
  }

}
interface AssigneeOption {
  label: string;
  icon?: string;
  color?: string;
}

interface PriorityOption {
  label: string;
  icon?: string;
  color?: string;
}

interface CreatedByOption {
  label: string;
  icon?: string;
  color?: string;
}
