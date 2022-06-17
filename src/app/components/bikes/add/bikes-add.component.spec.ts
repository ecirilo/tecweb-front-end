import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesAddComponent } from './bikes-add.component';

describe('BikesAddComponent', () => {
  let component: BikesAddComponent;
  let fixture: ComponentFixture<BikesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
