import { Component } from '@angular/core';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabMenuComponent, ToolbarComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
