import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-groups',
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent {
  isDropdownVisible = false;
  optionsList: string[] = ['Status', 'Tags', 'Due Date', 'Priority', 'Add filter'];
  filteredOptions: string[] = [...this.optionsList];

  groupList = [
    { icon: ' ', name: 'Status' },
    { icon: ' ', name: 'Assignee' },
    { icon: ' ', name: 'Priority' },
    { icon: ' ', name: 'Tags' },
    { icon: ' ', name: 'Due date' },
    { icon: ' ', name: 'Task Type' },
    { icon: ' ', name: 'UX - Status' },
    { icon: ' ', name: 'User stories - Status' }
  ];


  showDropdown(): void {
    this.isDropdownVisible = true;
  }

  closeDropdown(): void {
    this.isDropdownVisible = false;
  }

  filterOptions(event: Event): void {
    const searchValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredOptions = this.optionsList.filter(option =>
      option.toLowerCase().includes(searchValue)
    );
    console.log("Filtering options for:", searchValue);
  }
  preventRefreshingThePage(event: Event): void {
    event.preventDefault();
  }



}
