import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ToolbarTaskComponent} from "../toolbar-task/toolbar-task.component";
import {ToolbarReminderComponent} from "../toolbar-reminder/toolbar-reminder.component";
import {ToolbarChatComponent} from "../toolbar-chat/toolbar-chat.component";
import {ToolbarDocComponent} from "../toolbar-doc/toolbar-doc.component";
import {ToolbarWhiteboardComponent} from "../toolbar-whiteboard/toolbar-whiteboard.components";
import {ToolbarDashboardComponent} from "../toolbar-dashboard/toolbar-dashboard.component";



@Component({
  selector: 'app-toolbar-NewButton',

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
    ToolbarWhiteboardComponent,
    ToolbarDashboardComponent

  ],
  templateUrl: './toolbar-newButton.component.html',
  styleUrl: './toolbar-newButton.component.css'
})

export class ToolbarNewButtonComponent {
  @ViewChild('modalContent', {static: false}) modalContent!: ElementRef;

  ngAfterViewInit() {
    document.querySelectorAll('.nav-link').forEach(tab => {
      tab.addEventListener('click', () => {
        if (this.modalContent) {
          this.modalContent.nativeElement.scrollTop = 0;
        }
      });
    });
  }
}
