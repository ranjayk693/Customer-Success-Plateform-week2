import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBasedControlComponent } from './role-based-control.component';

describe('RoleBasedControlComponent', () => {
  let component: RoleBasedControlComponent;
  let fixture: ComponentFixture<RoleBasedControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoleBasedControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleBasedControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
