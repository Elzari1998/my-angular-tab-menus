import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Modal } from "bootstrap";


@Component({
  selector: 'app-toolbar-task',
  imports: [
    FormsModule,

  ],
  templateUrl: './toolbar-task.component.html',
  // styleUrl: './toolbar-task.component.css'
})
export class ToolbarTaskComponent {
  @ViewChild('myModal', {static:true}) modalRef!: ElementRef;
  searchQuery: string = '';

  openModal(){
    let modal = new Modal(this.modalRef.nativeElement);
    modal.show()
  }

  onSearch(): void {
    console.log('Search initiated for:', this.searchQuery);

  }
}
