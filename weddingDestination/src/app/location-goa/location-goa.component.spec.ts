import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationGoaComponent } from './location-goa.component';

describe('LocationGoaComponent', () => {
  let component: LocationGoaComponent;
  let fixture: ComponentFixture<LocationGoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationGoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationGoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
