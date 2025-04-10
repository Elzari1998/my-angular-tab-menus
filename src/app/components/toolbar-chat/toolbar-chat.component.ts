import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-toolbar-chat',
  imports: [
    FormsModule,

    CommonModule,
  ],
  templateUrl: './toolbar-chat.component.html',
  styleUrl: './toolbar-chat.component.css'
})

export class ToolbarChatComponent {
  users = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' }
  ];

  // Selected user
  selectedUserId: string | null = null;

  // Search query
  searchQuery: string = '';

  // Filtered list of users
  filteredUsers: Array<{ id: string, name: string }> = [...this.users];
  // List of users

  // Method to filter users based on search query
  filterUsers(): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Method to handle user selection
  selectUser(userId: string): void {
    this.selectedUserId = userId;
    console.log('Selected user ID:', userId);
  }
}
