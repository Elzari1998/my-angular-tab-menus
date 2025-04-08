import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ToolbarTaskComponent} from "../toolbar-task/toolbar-task.component";
import {ToolbarReminderComponent} from "../toolbar-reminder/toolbar-reminder.component";
import {ToolbarChatComponent} from "../toolbar-chat/toolbar-chat.component";
import {ToolbarDocComponent} from "../toolbar-doc/toolbar-doc.component";
import {ToolbarWhiteboardComponent} from "../toolbar-whiteboard/toolbar-whiteboard.components";

@Component({
  selector: 'app-toolbar',

  imports: [
    FormsModule,
    ToolbarTaskComponent,
    ToolbarDocComponent,
    ToolbarReminderComponent,
    ToolbarChatComponent,
    ToolbarDocComponent,
    ToolbarDocComponent,
    ToolbarWhiteboardComponent,
    ToolbarDocComponent,
    ToolbarWhiteboardComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})

export class ToolbarComponent {
  searchQuery: any;



}
