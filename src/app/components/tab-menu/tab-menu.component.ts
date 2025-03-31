import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var bootstrap: any; // Ensure Bootstrap is available

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent {
  selectedTab: string = 'dashboard'; // Default tab
  showLayoutOption: boolean = false;

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.showLayoutOption = true;
  }

  preventRefreshingThePage(event: Event) {
    event.preventDefault();
  }





  openFilterModal() {
    const modalElement = document.getElementById('filterModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
