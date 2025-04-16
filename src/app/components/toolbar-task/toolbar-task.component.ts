import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule, NgClass, NgIf} from '@angular/common';
declare var bootstrap: any;


@Component({
  selector: 'app-toolbar-task',
  imports: [
    FormsModule,
    NgIf,
    NgClass,
    CommonModule,
  ],
  templateUrl: './toolbar-task.component.html',
  styleUrl: './toolbar-task.component.css'
})
export class ToolbarTaskComponent {
  searchQuery: string = '';
  isInputVisible: boolean = false;
  inputValue: string = '';
  statuses = [
    { name: 'To Do', color: 'gray', icon: 'bi-circle-fill' },
    { name: 'Pending', color: 'gold', icon: 'bi-circle-fill' },
    { name: 'In Progress', color: 'blue', icon: 'bi-circle-fill' },
    { name: 'Completed', color: 'darkblue', icon: 'bi-check-circle' },
    { name: 'Deployed', color: 'green', icon: 'bi-circle-fill' }
  ];

  onSearch(): void {
    console.log('Search initiated for:', this.searchQuery);
  }
  // Method to toggle the input box visibility
  toggleInput(): void {
    this.isInputVisible = !this.isInputVisible;
  }
  createTask(): void {
    // Hide the input field and show the label and icon again
    this.isInputVisible = false;
    // Clear the input field
    this.inputValue = '';
  }
}
