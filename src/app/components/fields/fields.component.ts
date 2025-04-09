import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-fields',
  imports: [CommonModule, FormsModule],
  templateUrl: './fields.component.html',
  styleUrl: './fields.component.css'
})
export class FieldsComponent {

  activePanel: string = 'homeFields';
  @Output() panelChange = new EventEmitter<string>();


  fields :{icon: string , name:string, enabled:boolean}[] = [
    {icon: 'bi-person' , name : 'Assignee', enabled:true},
    {icon:'bi-caret-down-square', name : 'Phase', enabled:true},
    {icon:'bi-caret-down-square', name : 'Created By', enabled:true},
    {icon:'bi-caret-down-square' , name : 'UX - Status', enabled:true},
    {icon:'bi-caret-down-square', name : 'Development Status', enabled:true},
    {icon:'bi-caret-down-square', name : 'Overall Status', enabled:true},
    {icon:'bi-flag', name : 'Priority', enabled:true},
    {icon:'bi-calendar3', name : 'Due date', enabled:true},
    {icon:'bi-caret-down-square', name : 'Type', enabled:true},
    {icon:'bi-star', name : 'Effort', enabled:true},
    {icon:'bi-hash', name : 'Sequence', enabled:true},

  ]
  popularFields: { icon: string, name: string, enabled: boolean }[] = [
    {icon: 'bi-chat', name: 'Comments', enabled: false},
    {icon: 'bi-calendar3', name: 'Date created', enabled: false},
    {icon: 'bi-hash', name: 'Pull request', enabled: false},
  ]

  hidden: { icon: string, name: string, enabled: boolean }[] = [
    {icon: 'bi-chat', name: 'Assigned Comments', enabled: false},
    {icon: 'bi-person', name: 'Created by', enabled: false},
    {icon: 'bi-calendar3', name: 'Date closed', enabled: false},
    {icon: 'bi-calendar3', name: 'Date Updated', enabled: false},
    {icon: 'bi-hash', name: 'Dependencies', enabled: false},
    {icon: 'bi-person', name: 'Latest comment', enabled: false},
    {icon: 'bi-calendar3', name: 'Linked Docs', enabled: false},
    {icon: 'bi-calendar3', name: 'Linked tasks', enabled: false},
    {icon: 'bi-hash', name: 'Lists', enabled: false},
  ]

  fieldsInWorkspace: { icon: string, name: string, enabled: boolean }[] = [
    {icon: 'bi-chat', name: 'Probability', enabled: false},
    {icon: 'bi-person', name: 'Risk Level', enabled: false},
    {icon: 'bi-calendar3', name: 'Duration(Days)', enabled: false},
    {icon: 'bi-calendar3', name: 'Approver', enabled: false},
    {icon: 'bi-hash', name: 'Project Aspect', enabled: false},
    {icon: 'bi-person', name: 'Description', enabled: false},
    {icon: 'bi-calendar3', name: 'Mitigation cost', enabled: false},

  ]

  creatingNewFieldsItems: { icon: string, name: string, enabled: boolean }[] = [
    {icon: 'bi-chat', name: 'Destination', enabled: false},
    {icon: 'bi-person', name: 'Customer Feedback', enabled: false},
    {icon: 'bi-calendar3', name: 'Tourism Phase', enabled: false},
    {icon: 'bi-calendar3', name: 'Task summary', enabled: false},

  ]

  goBack(){
    console.log('fields-clicked-')
    this.panelChange.emit('homeFields');
  }

  openPanel(panelName: string): void {
    console.log('Clicked!!')
    this.activePanel = panelName;
  }

}
