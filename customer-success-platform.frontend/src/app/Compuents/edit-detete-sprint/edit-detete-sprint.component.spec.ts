import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeteteSprintComponent } from './edit-detete-sprint.component';

describe('EditDeteteSprintComponent', () => {
  let component: EditDeteteSprintComponent;
  let fixture: ComponentFixture<EditDeteteSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDeteteSprintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDeteteSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
