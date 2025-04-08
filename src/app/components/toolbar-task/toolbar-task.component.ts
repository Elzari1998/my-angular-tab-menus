import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-toolbar-task',
  imports: [
    FormsModule,

  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarTaskComponent {

  searchQuery: string = '';


  onSearch(): void {
    console.log('Search initiated for:', this.searchQuery);

  }
}
