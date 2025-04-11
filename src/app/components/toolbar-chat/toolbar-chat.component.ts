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
    { id: '1', name: 'John Doe', color: '#E3A9AD' },
    { id: '2', name: 'Jane Smith', color: '#15B0A5' },
    { id: '3', name: 'Alice Johnson' , color: '#FFBB33'}
  ];

  // Variable to track the visibility of attachments input and label
  showAttachments = false;

  // Variable to track if the textarea is focused
  isTextareaFocused: boolean = false;

  // Method to handle textarea focus
  onMessageTextareaFocus(): void {
    this.showAttachments = true;  // Show the buttons when the textarea is focused
  }

  // Method to handle textarea blur (losing focus)
  onMessageTextareaBlur(): void {
    // Do nothing on blur, buttons will stay visible
  }

  // Selected user
  selectedUserId: string | null = null;

  // Search query
  searchQuery: string = '';

  // Filtered list of users
  filteredUsers: Array<{ id: string, name: string, color:string }> = [...this.users];


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

  // Method that will be triggered when the "Create Chat" button is clicked
  createChat(): void {
    console.log('Create Chat button clicked');
    this.showAttachments = false;  // Hide the buttons when "Create Chat" is clicked
  }



  // // Add random status color to users dynamically
  // getStatusColor(status: string): string {
  //   switch (status) {
  //     case 'available':
  //       return '#4CAF50';  // Green for Available
  //     case 'busy':
  //       return '#FF5722';  // Red for Busy
  //     case 'away':
  //       return '#FFC107';  // Yellow for Away
  //     default:
  //       return '#9E9E9E';  // Grey for unknown status
  //   }
  // }
}
