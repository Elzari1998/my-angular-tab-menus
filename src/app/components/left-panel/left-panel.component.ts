import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SidebarModule} from '@syncfusion/ej2-angular-navigations';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-left-panel',
  imports: [FormsModule, CommonModule, SidebarModule, RouterLink],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.css'
})
export class LeftPanelComponent {
  isCollapsed = false;
  showSettings = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  showSettingsMenu() {
    this.showSettings = true;
  }

  showMainMenu() {
    this.showSettings = false;
  }


  menu = [
    { icon: 'bi-house', name: 'Home' },
    { icon: 'bi-inbox', name: 'Inbox' },
    { icon: 'bi-three-dots', name: 'More' },
  ];


  settingsMenu = [
    { name: 'People', icon: 'bi-people', route: '/people' },
    { name: 'Upgrade', icon: 'bi-arrow-up-circle', route: '/upgrade' },
    { name: 'CaganApps', icon: 'bi-grid' , route: '/cagan-apps' },
    { name: 'Settings', icon: 'bi-gear' , route: '/settings' },
    { name: 'Spaces', icon: 'bi-layout-text-window-reverse' , route: '/spaces' },
    { name: 'Security & Permission', icon: 'bi-shield-lock' ,route: '/security' },
    { name: 'Audit Logs', icon: 'bi-journal-check' , route: '/auditLogs' },
    { name: 'Teams', icon: 'bi-diagram-3' , route: '/teams' },
    { name: 'Task Types', icon: 'bi-list-check' , route: '/tasks-types' },
    { name: 'Imports/Exports', icon: 'bi-upload', route: '/imports' },
    { name: 'Cagan API', icon: 'bi-code' , route: '/cagan-apis' },
    { name: 'Email Integration', icon: 'bi-envelope', route: '/email-integration' },
    { name: 'Trash', icon: 'bi-trash', route: '/trash' },
  ]


}
