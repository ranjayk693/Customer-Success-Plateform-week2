import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteVersionHistoryComponent } from './edit-delete-version-history.component';

describe('EditDeleteVersionHistoryComponent', () => {
  let component: EditDeleteVersionHistoryComponent;
  let fixture: ComponentFixture<EditDeleteVersionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDeleteVersionHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDeleteVersionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
