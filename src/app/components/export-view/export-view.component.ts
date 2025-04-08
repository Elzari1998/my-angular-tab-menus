import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-export-view',
    imports: [
        NgForOf
    ],
  templateUrl: './export-view.component.html',
  styleUrl: './export-view.component.css'
})
export class ExportViewComponent {



  exportOptionsList = [
    { icon: '', name: 'Visible columns' },
    { icon: '', name: 'Task Names Only' },
    { icon: '', name: 'All columns' }
  ];

  fileFormat = [
    { icon: '', name: 'CSV' },
    { icon: '', name: 'Excel' }
  ];

  dateFormat = [
    { icon: '', name: 'Normal' },
    { icon: '', name: 'ISO' },
    { icon: '', name: 'POSIX' }
  ];

  timeFormat = [
    { icon: '', name: 'Normal' },
    { icon: '', name: 'hh:mm' },
    { icon: '', name: 'hh:mm:ss' }
  ];

}
