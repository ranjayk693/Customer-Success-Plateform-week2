import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneClientFeedbackComponent } from './show-one-client-feedback.component';

describe('ShowOneClientFeedbackComponent', () => {
  let component: ShowOneClientFeedbackComponent;
  let fixture: ComponentFixture<ShowOneClientFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowOneClientFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowOneClientFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
