import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ToolbarNewButtonComponent} from "../toolbar-newButton/toolbar-newButton.component";

@Component({
  selector: 'app-toolbar',

  imports: [
    FormsModule,
    ToolbarNewButtonComponent,

  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})

export class ToolbarComponent {
  searchQuery: any;

}
