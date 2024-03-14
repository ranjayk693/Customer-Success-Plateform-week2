import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteStakeholderComponent } from './edit-delete-stakeholder.component';

describe('EditDeleteStakeholderComponent', () => {
  let component: EditDeleteStakeholderComponent;
  let fixture: ComponentFixture<EditDeleteStakeholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDeleteStakeholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDeleteStakeholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
