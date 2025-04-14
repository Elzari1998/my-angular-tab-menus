import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-toolbar-doc',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './toolbar-doc.component.html',
  styleUrls: ['./toolbar-doc.component.css'],
})
export class ToolbarDocComponent implements AfterViewInit {
  @ViewChild('modalBody', { static: false }) modalBody!: ElementRef;
  // Variable to track visibility of the input box
  isInputVisible: boolean = false;
  // Variable to store the input field value
  inputValue: string = '';
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      document.querySelectorAll('.nav-link').forEach((tab) => {
        tab.addEventListener('click', () => {
          if (this.modalBody) {
            this.modalBody.nativeElement.scrollTop = 0;
          }
        });
      });
    }
  }


  // Method to toggle the input box visibility
  toggleInput(): void {
    this.isInputVisible = !this.isInputVisible;
  }

  createDoc(): void {
    // Hide the input field and show the label and icon again
    this.isInputVisible = false;
    // Clear the input field
    this.inputValue = '';

  }
}
