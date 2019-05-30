import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindTrainComponent } from './wind-train.component';

describe('WindTrainComponent', () => {
  let component: WindTrainComponent;
  let fixture: ComponentFixture<WindTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
