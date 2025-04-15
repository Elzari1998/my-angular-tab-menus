import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {LeftPanelComponent} from '../../components/left-panel/left-panel.component';
import {RouterOutlet} from '@angular/router';
import {TabMenuComponent} from '../../components/tab-menu/tab-menu.component';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    CommonModule,
    LeftPanelComponent,
    RouterOutlet,
    TabMenuComponent,
    ToolbarComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }


}
