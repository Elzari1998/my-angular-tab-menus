import {AfterViewInit, Component, Inject, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {FormsModule} from "@angular/forms";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [CommonModule, FormsModule,   MatSlideToggleModule],
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  selectedTab: string = 'dashboard';  // Default active tab
  autosave: boolean = false;
  pinView: boolean = false;
  privateView: boolean = false;
  protectedView: boolean = false;
  defaultView: boolean = false;
  selectedOption:string = 'Collapsed'
  activePanel: string = 'homeFields';
  fieldVisible:boolean = false;
  fields :{icon: string , name:string, enabled:boolean}[] = [
    {icon: 'bi-person' , name : 'Assignee', enabled:true},
    {icon:'bi-caret-down-square', name : 'Phase', enabled:true},
    {icon:'bi-caret-down-square', name : 'Created By', enabled:true},
    {icon:'bi-caret-down-square' , name : 'UX - Status', enabled:true},
    {icon:'bi-caret-down-square', name : 'Development Status', enabled:true},
    {icon:'bi-caret-down-square', name : 'Overall Status', enabled:true},
    {icon:'bi-flag', name : 'Priority', enabled:true},
    {icon:'bi-calendar3', name : 'Due date', enabled:true},
    {icon:'bi-caret-down-square', name : 'Type', enabled:true},
    {icon:'bi-star', name : 'Effort', enabled:true},
    {icon:'bi-hash', name : 'Sequence', enabled:true},



  ]
  isStatusVisible: boolean = false;
  isTagsVisible: boolean = false;
  isDueDateVisible: boolean = false;

  // Function to set the active tab
  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }

  filterOptions(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value.toLowerCase();
    console.log("Filtering options for:", searchValue);
    // Implement filtering logic based on searchValue
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const dropdown = document.querySelector('.options-box') as HTMLElement;
      const dropdownRect = dropdown.getBoundingClientRect();
      const windowWidth = window.innerWidth;


      if (dropdownRect.right > windowWidth) {
        dropdown.style.left = `${windowWidth - dropdownRect.width}px`; // Move to the left if it's overflowing
      }
    }
  }
  // Prevent page refresh on click (if necessary for some dropdown items)
  preventRefreshingThePage(event: Event): void {
    event.preventDefault();

  }

  selectOption(option: string, event:Event): void {
    event.preventDefault();
    this.selectedOption = option;
  }
  toggleFields(event:Event){
    event.preventDefault();
    console.log(this.fieldVisible);
      this.fieldVisible = !this.fieldVisible;
  }

  openPanel(panel: string) {
    this.activePanel = panel;
  }

}
