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
// List of users
  users = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' }
  ];

  // Selected user
  selectedUserId: string | null = null;

  // Method to handle user selection
  selectUser(userId: string): void {
    this.selectedUserId = userId;
    console.log('Selected user ID:', userId);
  }
}
