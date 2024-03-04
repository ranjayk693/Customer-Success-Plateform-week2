import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingProjectManagerComponent } from './meeting-project-manager.component';

describe('MeetingProjectManagerComponent', () => {
  let component: MeetingProjectManagerComponent;
  let fixture: ComponentFixture<MeetingProjectManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingProjectManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetingProjectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
