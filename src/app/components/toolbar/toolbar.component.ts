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
  showDescription:boolean = false;
  showTag: boolean = false;
  imports : boolean = false;
  textDescription = true;

  TemplateType = [
    {id:1, name: 'Space'},
    {id:1, name: 'Folder'},
    {id:1, name: 'List'},
    {id:1, name: 'Task'},
    {id:1, name: 'Doc'},
    {id:1, name: 'View'},
    {id:1, name: 'Checklist'},
    {id:1, name: 'Whiteboard'}
  ]

  showDescriptions():void{
    this.showDescription = !this.showDescription;
  }

  showTags():void{
    console.log('Whatup?? clicked !!!')
    this.showTag = !this.showTag;
  }

  showCustomizeImports(): void {
    this.imports = true;
    this.textDescription = false;
  }
  showImportEverything(): void {
    this.imports = false;
    this.textDescription = true;
  }

  customizeItemsImports = [
    {id:1, name: 'Due date'},
    {id:2, name: 'Start date'},
    {id:3, name: 'Watchers'},
    {id:4, name: 'Comment Attachments'},
    {id:5, name: 'Recurring settings'},
    {id:6, name: 'Tags'},
    {id:7, name: 'Priority'},
    {id:8, name: 'Custom Fields'},
    {id:9, name: 'Subtasks'},
    {id:10, name: 'Task Types'},
    {id:11, name: 'Assignees'},
    {id:12, name: 'Attachments'},
    {id:13, name: 'Comments'},
    {id:14, name: 'Current task statuses'},
    {id:15, name: 'Dependencies'},
    {id:16, name: 'Description'},
    {id:17, name: 'Copy settings for Statuses'},
    {id:18, name: 'Time Estimate'},
    {id:19, name: 'Checklists'},
    {id:20, name: 'Relationships'},


  ]



}

