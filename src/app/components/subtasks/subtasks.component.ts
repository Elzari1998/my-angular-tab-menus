import { Component } from '@angular/core';

@Component({
  selector: 'app-subtasks',
  imports: [],
  templateUrl: './subtasks.component.html',
  styleUrl: './subtasks.component.css'
})
export class SubtasksComponent {
  selectedOption = 'Collapsed';

  selectOption(option: string, event: Event): void {
    event.preventDefault();
    this.selectedOption = option;
  }

}
