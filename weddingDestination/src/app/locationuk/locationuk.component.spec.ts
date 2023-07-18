import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationukComponent } from './locationuk.component';

describe('LocationukComponent', () => {
  let component: LocationukComponent;
  let fixture: ComponentFixture<LocationukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationukComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
