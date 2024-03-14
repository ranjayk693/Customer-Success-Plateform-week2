import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiskProflingComponent } from './add-risk-profling.component';

describe('AddRiskProflingComponent', () => {
  let component: AddRiskProflingComponent;
  let fixture: ComponentFixture<AddRiskProflingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRiskProflingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRiskProflingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
