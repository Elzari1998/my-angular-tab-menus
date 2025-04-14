import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
import {
  DocumentEditorComponent,
  EditorService,
  SelectionService,
  SfdtExportService,
  EditorHistoryService,
  TableDialogService,
  ContextMenuService,
  DocumentEditorAllModule
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-toolbar-doc',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    DocumentEditorAllModule,
    ColorPickerModule
  ],
  providers: [
    EditorService,
    SelectionService,
    SfdtExportService,
    EditorHistoryService,
    TableDialogService,
    ContextMenuService
  ],
  templateUrl: './toolbar-doc.component.html',
  styleUrls: ['./toolbar-doc.component.css'],
})
export class ToolbarDocComponent implements AfterViewInit {
  showDocumentEditor = false;

  @ViewChild('document_editor', { static: false })
  public documentEditor!: DocumentEditorComponent;

  @ViewChild('modalBody', { static: false })
  modalBody!: ElementRef;

  toggleDocumentEditor(): void {
    this.showDocumentEditor = true;
  }

  async openDocModal(): Promise<void> {
    if (typeof window !== 'undefined') {
      const bootstrap = await import('bootstrap');
      const modalElement = document.getElementById('docModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
        this.showDocumentEditor = true;
      }
    }
  }

  onCreated(): void {
    this.documentEditor?.editor.insertTable(2, 2);
  }

  toolbarButtonClick(args: any): void {
    if (!this.documentEditor) return;

    const editor = this.documentEditor.editor;

    switch (args.item.id) {
      case 'table':
        editor.insertTable(2, 2);
        break;
      case 'insert_above':
        editor.insertRow(true);
        break;
      case 'insert_below':
        editor.insertRow(false);
        break;
      case 'insert_left':
        editor.insertColumn(true);
        break;
      case 'insert_right':
        editor.insertColumn(false);
        break;
      case 'delete_table':
        editor.deleteTable();
        break;
      case 'delete_row':
        editor.deleteRow();
        break;
      case 'delete_column':
        editor.deleteColumn();
        break;
      case 'merge_cell':
        editor.mergeCells();
        break;
      case 'table_dialog':
        this.documentEditor.showDialog('Table');
        break;
    }
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      document.querySelectorAll('.nav-link').forEach((tab) => {
        tab.addEventListener('click', () => {
          setTimeout(() => {
            this.modalBody?.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
          }, 0);
        });
      });
    }
  }


  // Method to toggle the input box visibility
  toggleInput(): void {
    this.isInputVisible = !this.isInputVisible;
  }

  createDoc(): void {
    // Hide the input field and show the label and icon again
    this.isInputVisible = false;
    // Clear the input field
    this.inputValue = '';

  }
}
