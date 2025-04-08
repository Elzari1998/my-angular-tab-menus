import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar-doc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './toolbar-doc.component.html',
  styleUrls: ['./toolbar-doc.component.css'],
})
export class ToolbarDocComponent implements AfterViewInit {
  @ViewChild('modalBody', { static: false }) modalBody!: ElementRef;

  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      document.querySelectorAll('.nav-link').forEach((tab) => {
        tab.addEventListener('click', () => {
          if (this.modalBody) {
            this.modalBody.nativeElement.scrollTop = 0;
          }
        });
      });
    }
  }
}
