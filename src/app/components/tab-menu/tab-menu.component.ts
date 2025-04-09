import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {LayoutOptionsComponent} from '../layout-options/layout-options.component';
import {FieldsComponent} from '../fields/fields.component';
import {FilterComponent} from '../filter/filter.component';
import {GroupsComponent} from '../groups/groups.component';
import {SubtasksComponent} from '../subtasks/subtasks.component';
import {TemplatesComponent} from '../templates/templates.component';
import {AddToFavoritesComponent} from '../add-to-favorites/add-to-favorites.component';
import {ExportViewComponent} from '../export-view/export-view.component';

@Component({
  selector: 'app-tab-menu',
  imports: [CommonModule, FormsModule, MatSlideToggleModule, LayoutOptionsComponent,
    FieldsComponent, FilterComponent, GroupsComponent, SubtasksComponent, TemplatesComponent,
    AddToFavoritesComponent, ExportViewComponent],
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }
  searchQuery: string = '';
  selectedTab: string = 'dashboard';
  autosave = false;
  pinView = false;
  privateView = false;
  protectedView = false;
  defaultView = false;
  activePanel = 'homeFields';



  users = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Alice Johnson' }
  ];

  notifications = [
    { id: '1', name: 'On due date' },
    { id: '2', name: '10 minutes before' },
    { id: '3', name: '1 hour before' },
    { id: '4', name: 'Custom' },
    { id: '5', name: 'Dont notify' }
  ];

  reminder = {
    description: '',
    time: '',
    assignedUser: '',
    notification: ''
  };

  optionsList: string[] = ['Status', 'Tags', 'Due Date', 'Priority', 'Add filter'];
  filteredOptions: string[] = [...this.optionsList];


  onSearch(): void {
    console.log('Search initiated for:', this.searchQuery);
  }

  openPanel(panelName: string): void {
    this.activePanel = panelName;
  }

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }


  saveReminder(): void {
    console.log(this.reminder);
    // Logic to save reminder
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const dropdown = document.querySelector('.options-box') as HTMLElement;
      if (dropdown) {
        const dropdownRect = dropdown.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        if (dropdownRect.right > windowWidth) {
          dropdown.style.left = `${windowWidth - dropdownRect.width}px`;
        }
      }
    }
  }

  resizeTextarea($event: Event) {

  }
}
