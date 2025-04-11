import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar-reminder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './toolbar-reminder.component.html',
  styleUrl: './toolbar-reminder.component.css',
})
export class ToolbarReminderComponent {

  users = [
    { id: '1', name: 'John Doe', color: '#E3A9AD' },
    { id: '2', name: 'Jane Smith', color: '#15B0A5' },
    { id: '3', name: 'Alice Johnson' , color: '#FFBB33'}
  ];


  notifications = [
    { id: '1', name: 'On due date' },
    { id: '2', name: '10 minutes before' },
    { id: '3', name: '1 hour before' },
    { id: '4', name: 'Custom' },
    { id: '5', name: 'Dont notify' },
  ];

  reminder = {
    description: '',
    time: '',
    assignedUser: '',
    notification: '',
  };

  // Variable to track the visibility of attachments input and label
  showAttachments = false;

  searchQuery: any;

  // Toggle the visibility of the attachments section
  toggleAttachments(): void {
    this.showAttachments = !this.showAttachments;
  }

  saveReminder(): void {
    if (!this.reminder.description || !this.reminder.time) {
      alert("Please provide both a description and a time.");
      return;
    }
    console.log(this.reminder);
  }

  resizeTextarea(event: any): void {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  getUserName(id: string): string | undefined {
    return this.users.find(user => user.id === id)?.name;
  }

  getNotificationName(id: string): string | undefined {
    return this.notifications.find(notif => notif.id === id)?.name;
  }
  // Filtered list of users
  filteredUsers: Array<{ id: string, name: string, color:string }> = [...this.users];
  // Method to filter users based on search query
  filterUsers(): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
  // Selected user
  selectedUserId: string | null = null;
  // Method to handle user selection
  selectUser(userId: string): void {
    this.selectedUserId = userId;
    console.log('Selected user ID:', userId);
  }
}
