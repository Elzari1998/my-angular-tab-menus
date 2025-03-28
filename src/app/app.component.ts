import { Component } from '@angular/core';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabMenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
