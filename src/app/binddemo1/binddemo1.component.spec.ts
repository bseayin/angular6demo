import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Binddemo1Component } from './binddemo1.component';

describe('Binddemo1Component', () => {
  let component: Binddemo1Component;
  let fixture: ComponentFixture<Binddemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Binddemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Binddemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
