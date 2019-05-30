import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EparentComponent } from './eparent.component';

describe('EparentComponent', () => {
  let component: EparentComponent;
  let fixture: ComponentFixture<EparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
