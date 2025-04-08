import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-toolbar-reminder',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

  ],
  templateUrl: './toolbar-reminder.component.html',
  styleUrl: './toolbar-reminder.component.css'
})

export class ToolbarReminderComponent {
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
  reminder = {
    description: '',
    time: '',
    assignedUser: '',
    notification: ''
  };



  searchQuery: any;
  saveReminder(): void {
    console.log(this.reminder);
  }

  resizeTextarea(event: any): void {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
  }
}
