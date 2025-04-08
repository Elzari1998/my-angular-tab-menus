import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {ToolbarTaskComponent} from "../toolbar-task/toolbar-task.component";
import {ToolbarDocComponent} from "../toolbar-doc/toolbar-doc.component";
import {ToolbarReminderComponent} from '../toolbar-reminder/toolbar-reminder.component';

@Component({
  selector: 'app-toolbar',
  imports: [
    FormsModule,
    ToolbarTaskComponent,
    ToolbarDocComponent,
    ToolbarReminderComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})

export class ToolbarComponent {
  reminder = {
    description: '',
    time: '',
    assignedUser: '',
    notification: ''
  };
  searchQuery: any;
  saveReminder(): void {
    console.log(this.reminder);

  }
}
