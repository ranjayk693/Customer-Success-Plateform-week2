import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVerionHistoryComponent } from './add-verion-history.component';

describe('AddVerionHistoryComponent', () => {
  let component: AddVerionHistoryComponent;
  let fixture: ComponentFixture<AddVerionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVerionHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddVerionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
