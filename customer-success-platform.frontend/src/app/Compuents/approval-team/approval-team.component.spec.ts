import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalTeamComponent } from './approval-team.component';

describe('ApprovalTeamComponent', () => {
  let component: ApprovalTeamComponent;
  let fixture: ComponentFixture<ApprovalTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovalTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprovalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
