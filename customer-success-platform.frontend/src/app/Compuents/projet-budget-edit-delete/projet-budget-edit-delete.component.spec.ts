import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetBudgetEditDeleteComponent } from './projet-budget-edit-delete.component';

describe('ProjetBudgetEditDeleteComponent', () => {
  let component: ProjetBudgetEditDeleteComponent;
  let fixture: ComponentFixture<ProjetBudgetEditDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetBudgetEditDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetBudgetEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
