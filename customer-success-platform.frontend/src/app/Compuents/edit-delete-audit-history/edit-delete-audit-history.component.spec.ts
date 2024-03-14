import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteAuditHistoryComponent } from './edit-delete-audit-history.component';

describe('EditDeleteAuditHistoryComponent', () => {
  let component: EditDeleteAuditHistoryComponent;
  let fixture: ComponentFixture<EditDeleteAuditHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDeleteAuditHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDeleteAuditHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
