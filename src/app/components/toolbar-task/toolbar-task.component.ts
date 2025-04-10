import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
declare var bootstrap: any;


@Component({
  selector: 'app-toolbar-task',
  imports: [
    FormsModule,

  ],
  templateUrl: './toolbar-task.component.html',
  // styleUrl: './toolbar-task.component.css'
})
export class ToolbarTaskComponent {
  searchQuery: string = '';



  onSearch(): void {
    console.log('Search initiated for:', this.searchQuery);
  }




}
