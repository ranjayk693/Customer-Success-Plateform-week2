import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerProjectUpdateComponent } from './manager-project-update.component';

describe('ManagerProjectUpdateComponent', () => {
  let component: ManagerProjectUpdateComponent;
  let fixture: ComponentFixture<ManagerProjectUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerProjectUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerProjectUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
