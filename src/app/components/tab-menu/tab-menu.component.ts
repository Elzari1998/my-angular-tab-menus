import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-tab-menu',
  imports: [CommonModule, FormsModule, MatSlideToggleModule],
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  addTable() {
    const modalContent = document.getElementById("modalContent");
    if (modalContent) {
      modalContent.innerHTML = `
        <button class="btn btn-light btn-sm w-100 text-start">+</button>
        <table class="table table-bordered mt-2">
          <tr>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
          </tr>
          <tr>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
          </tr>
        </table>
      `;
    }
  }

  searchQuery: string = '';

  onSearch(): void {
    console.log('Search initiated for:', this.searchQuery);

  }

  selectedTab: string = 'dashboard';  // Default active tab
  autosave: boolean = false;
  pinView: boolean = false;
  privateView: boolean = false;
  protectedView: boolean = false;
  defaultView: boolean = false;
  selectedOption: string = 'Collapsed';
  activePanel: string = 'homeFields';


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
  popularFields: { icon: string, name: string, enabled: boolean }[] = [
    {icon: 'bi-chat', name: 'Comments', enabled: false},
    {icon: 'bi-calendar3', name: 'Date created', enabled: false},
    {icon: 'bi-hash', name: 'Pull request', enabled: false},
  ]

  hidden: { icon: string, name: string, enabled: boolean }[] = [
    {icon: 'bi-chat', name: 'Assigned Comments', enabled: false},
    {icon: 'bi-person', name: 'Created by', enabled: false},
    {icon: 'bi-calendar3', name: 'Date closed', enabled: false},
    {icon: 'bi-calendar3', name: 'Date Updated', enabled: false},
    {icon: 'bi-hash', name: 'Dependencies', enabled: false},
    {icon: 'bi-person', name: 'Latest comment', enabled: false},
    {icon: 'bi-calendar3', name: 'Linked Docs', enabled: false},
    {icon: 'bi-calendar3', name: 'Linked tasks', enabled: false},
    {icon: 'bi-hash', name: 'Lists', enabled: false},
  ]

  fieldsInWorkspace: { icon: string, name: string, enabled: boolean }[] = [
    {icon: 'bi-chat', name: 'Probability', enabled: false},
    {icon: 'bi-person', name: 'Risk Level', enabled: false},
    {icon: 'bi-calendar3', name: 'Duration(Days)', enabled: false},
    {icon: 'bi-calendar3', name: 'Approver', enabled: false},
    {icon: 'bi-hash', name: 'Project Aspect', enabled: false},
    {icon: 'bi-person', name: 'Description', enabled: false},
    {icon: 'bi-calendar3', name: 'Mitigation cost', enabled: false},

  ]

  creatingNewFieldsItems: { icon: string, name: string, enabled: boolean }[] = [
    {icon: 'bi-chat', name: 'Destination', enabled: false},
    {icon: 'bi-person', name: 'Customer Feedback', enabled: false},
    {icon: 'bi-calendar3', name: 'Tourism Phase', enabled: false},
    {icon: 'bi-calendar3', name: 'Task summary', enabled: false},

  ]

  layouts: {  name: string, enabled: boolean }[] = [
    {  name: 'Show empty statuses', enabled: true },
    {  name: 'Pin Description', enabled: true },
    { name: 'Wrap Text', enabled: true },
    { name: 'Task location', enabled: true },
    {  name: 'Task properties', enabled: true },
    { name: 'Task locations', enabled: true },
    { name: 'Task properties', enabled: true },
    { name: 'Subtask parent names', enabled: true },
  ];

  groupList:{icon:string, name:string}[] =[
    {icon:' ', name : 'Status' },
    {icon:' ', name : 'Assignee' },
    {icon:' ', name : 'Priority' },
    {icon:' ', name : 'Tags' },
    {icon:' ', name : 'Due date' },
    {icon:' ', name : 'Task Type' },
    {icon:' ', name : 'UX - Status' },
    {icon:' ', name : 'User stories - Status' },
  ]
exportOptionsList  = [
  {icon:'', name: 'Visible columns'},
  {icon:'', name: 'Task Names Only'},
  {icon:'', name: 'All columns'}

]
  fileFormat = [
    {icon:'', name: 'CSV'},
    {icon:'', name: 'Excel'},
  ]
  dateFormat = [
    {icon:'', name: 'Normal'},
    {icon:'', name: 'ISO'},
    {icon:'', name: 'POSIX'},
  ]
  timeFormat = [
    {icon:'', name: 'Normal'},
    {icon:'', name: 'hh:mm'},
    {icon:'', name: 'hh:mm:ss'},
  ]

  layoutsVisibility: { name: string, enabled: boolean }[] = [
    {name: 'Closed tasks', enabled: true},
    {name: 'Closed subtasks', enabled: true},
    {name: 'Tasks from other lists', enabled: true},

  ];

  layoutsView: {icon: string, name: string, enabled: boolean }[] = [
    {icon:'bi-person' ,name: 'Default to Me Mode', enabled: true},


  ];
  openPanel(panelName: string): void {
    this.activePanel = panelName;
  }

  layoutsView2: {icon: string, name: string}[] = [
    {icon:'bi bi-file-earmark me-2' ,name: 'Duplicate view'},
    {icon:'bi bi-arrow-counterclockwise me-2' ,name: 'Reset view to defaults'},


  ];
  // Function to set the active tab
  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }

  optionsList: string[] = ['Status', 'Tags', 'Due Date', 'Priority', 'Add filter'];
  filteredOptions: string[] = [...this.optionsList];
  isDropdownVisible = false;

  filterOptions(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value.toLowerCase();
    console.log("Filtering options for:", searchValue);

    this.filteredOptions = this.optionsList.filter(option =>
        option.toLowerCase().includes(searchValue)
    );
  }

  showDropdown() {
    this.isDropdownVisible = true;
  }

  closeDropdown() {
    this.isDropdownVisible = false;
  }

  clearFilters() {
    console.log("Filters cleared");
  }


  ngAfterViewInit() {
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


  preventRefreshingThePage(event: Event): void {
    event.preventDefault();
  }

  selectOption(option: string, event: Event): void {
    event.preventDefault();
    this.selectedOption = option;
  }


  favoriteName: string = '';

  saveFavorite() {
    console.log('Favorite saved:', this.favoriteName);
  }

togglePane(){

}


}
