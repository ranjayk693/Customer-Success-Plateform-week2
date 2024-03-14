import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhasesMilestoneComponent } from './add-phases-milestone.component';

describe('AddPhasesMilestoneComponent', () => {
  let component: AddPhasesMilestoneComponent;
  let fixture: ComponentFixture<AddPhasesMilestoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPhasesMilestoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPhasesMilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
