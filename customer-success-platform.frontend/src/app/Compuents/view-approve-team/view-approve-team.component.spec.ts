import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApproveTeamComponent } from './view-approve-team.component';

describe('ViewApproveTeamComponent', () => {
  let component: ViewApproveTeamComponent;
  let fixture: ComponentFixture<ViewApproveTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewApproveTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewApproveTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
