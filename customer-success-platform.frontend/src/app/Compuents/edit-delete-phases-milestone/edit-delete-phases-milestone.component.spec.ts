import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeletePhasesMilestoneComponent } from './edit-delete-phases-milestone.component';

describe('EditDeletePhasesMilestoneComponent', () => {
  let component: EditDeletePhasesMilestoneComponent;
  let fixture: ComponentFixture<EditDeletePhasesMilestoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDeletePhasesMilestoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDeletePhasesMilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
