import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesDataComponent } from './resources-data.component';

describe('ResourcesDataComponent', () => {
  let component: ResourcesDataComponent;
  let fixture: ComponentFixture<ResourcesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourcesDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResourcesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
