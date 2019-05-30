import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakeTrainComponent } from './earthquake-train.component';

describe('EarthquakeTrainComponent', () => {
  let component: EarthquakeTrainComponent;
  let fixture: ComponentFixture<EarthquakeTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthquakeTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
