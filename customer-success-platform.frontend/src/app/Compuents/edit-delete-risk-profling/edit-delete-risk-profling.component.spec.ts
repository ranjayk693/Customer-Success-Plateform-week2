import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteRiskProflingComponent } from './edit-delete-risk-profling.component';

describe('EditDeleteRiskProflingComponent', () => {
  let component: EditDeleteRiskProflingComponent;
  let fixture: ComponentFixture<EditDeleteRiskProflingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDeleteRiskProflingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDeleteRiskProflingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
