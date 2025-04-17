import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAndPermissionsComponent } from './security-and-permissions.component';

describe('SecurityAndPermissionsComponent', () => {
  let component: SecurityAndPermissionsComponent;
  let fixture: ComponentFixture<SecurityAndPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityAndPermissionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityAndPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
