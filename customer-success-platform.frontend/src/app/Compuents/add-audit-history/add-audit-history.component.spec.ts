import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuditHistoryComponent } from './add-audit-history.component';

describe('AddAuditHistoryComponent', () => {
  let component: AddAuditHistoryComponent;
  let fixture: ComponentFixture<AddAuditHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAuditHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAuditHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
