import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {ToolbarTaskComponent} from "../toolbar-task/toolbar-task.component";

@Component({
  selector: 'app-toolbar',
  imports: [
    FormsModule,
    NgForOf,
    ToolbarTaskComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})

export class ToolbarComponent {
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


  reminder = {
    description: '',
    time: '',
    assignedUser: '',
    notification: ''
  };

  // Example data user and notification
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

  // Method to handle the resizing of the textarea
  resizeTextarea(event: any): void {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
  }

  // Placeholder method to save the reminder
  saveReminder(): void {
    console.log(this.reminder);
    // Your logic to save the reminder goes here
  }
  togglePane(){

  }
}
