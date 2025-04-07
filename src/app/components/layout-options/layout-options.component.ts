import { Component , Output, EventEmitter} from '@angular/core';
import { CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-layout-options',
  imports: [
    ReactiveFormsModule,MatSlideToggleModule,CommonModule,FormsModule
  ],
  templateUrl: './layout-options.component.html',
  styleUrl: './layout-options.component.css'
})
export class LayoutOptionsComponent {

  @Output() panelChange = new EventEmitter<string>();

  layouts: {  name: string, enabled: boolean }[] = [
    {  name: 'Show empty statuses', enabled: true },
    {  name: 'Pin Description', enabled: true },
    { name: 'Wrap Text', enabled: true },
    { name: 'Task location', enabled: true },
    {  name: 'Task properties', enabled: true },
    { name: 'Task locations', enabled: true },
    { name: 'Task properties', enabled: true },
    { name: 'Subtask parent names', enabled: true },
  ];

  layoutsVisibility: { name: string, enabled: boolean }[] = [
    {name: 'Closed tasks', enabled: true},
    {name: 'Closed subtasks', enabled: true},
    {name: 'Tasks from other lists', enabled: true},

  ];

  layoutsView: {icon: string, name: string, enabled: boolean }[] = [
    {icon:'bi-person' ,name: 'Default to Me Mode', enabled: true},


  ];


  layoutsView2: {icon: string, name: string}[] = [
    {icon:'bi bi-file-earmark me-2' ,name: 'Duplicate view'},
    {icon:'bi bi-arrow-counterclockwise me-2' ,name: 'Reset view to defaults'},


  ];

  goBack() {
    console.log('clicked clicked')
    this.panelChange.emit('homeFields');
  }



}
