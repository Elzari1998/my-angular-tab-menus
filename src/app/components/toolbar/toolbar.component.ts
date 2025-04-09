import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToolbarNewButtonComponent } from '../toolbar-newButton/toolbar-newButton.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-toolbar',

  imports: [FormsModule, ToolbarNewButtonComponent, CommonModule ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  searchQuery: any;

  TemplateType = [
    {id:1, name: 'Space'},
    {id:1, name: 'Folder'},
    {id:1, name: 'List'},
    {id:1, name: 'Task'},
    {id:1, name: 'Doc'},
    {id:1, name: 'View'},
    {id:1, name: 'Checklist'},
    {id:1, name: 'Whiteboard'}
  ]}
