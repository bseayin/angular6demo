import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpdemo2Component } from './httpdemo2.component';

describe('Httpdemo2Component', () => {
  let component: Httpdemo2Component;
  let fixture: ComponentFixture<Httpdemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Httpdemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Httpdemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
