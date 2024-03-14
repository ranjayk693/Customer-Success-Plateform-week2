import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClientGeneralUpdateComponent } from './show-client-general-update.component';

describe('ShowClientGeneralUpdateComponent', () => {
  let component: ShowClientGeneralUpdateComponent;
  let fixture: ComponentFixture<ShowClientGeneralUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowClientGeneralUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowClientGeneralUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
