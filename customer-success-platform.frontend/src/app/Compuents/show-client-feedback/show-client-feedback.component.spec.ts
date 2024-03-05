import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClientFeedbackComponent } from './show-client-feedback.component';

describe('ShowClientFeedbackComponent', () => {
  let component: ShowClientFeedbackComponent;
  let fixture: ComponentFixture<ShowClientFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowClientFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowClientFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
