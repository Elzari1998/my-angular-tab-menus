import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportViewComponent } from './export-view.component';

describe('ExportViewComponent', () => {
  let component: ExportViewComponent;
  let fixture: ComponentFixture<ExportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
