import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WparentComponent } from './wparent.component';

describe('WparentComponent', () => {
  let component: WparentComponent;
  let fixture: ComponentFixture<WparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
