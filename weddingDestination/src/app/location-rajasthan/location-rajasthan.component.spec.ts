import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationRajasthanComponent } from './location-rajasthan.component';

describe('LocationRajasthanComponent', () => {
  let component: LocationRajasthanComponent;
  let fixture: ComponentFixture<LocationRajasthanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationRajasthanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationRajasthanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
