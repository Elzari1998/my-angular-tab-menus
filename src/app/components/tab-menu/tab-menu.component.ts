import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent {
  selectedTab: string = 'dashboard'; // Default tab

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  preventRefreshingThePage(event: Event) {
    event.preventDefault();
  }



}
