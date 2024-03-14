import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFeedbackManagerComponent } from './show-feedback-manager.component';

describe('ShowFeedbackManagerComponent', () => {
  let component: ShowFeedbackManagerComponent;
  let fixture: ComponentFixture<ShowFeedbackManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowFeedbackManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowFeedbackManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
