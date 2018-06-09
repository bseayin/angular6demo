import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqxchartdemoComponent } from './jqxchartdemo.component';

describe('JqxchartdemoComponent', () => {
  let component: JqxchartdemoComponent;
  let fixture: ComponentFixture<JqxchartdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqxchartdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqxchartdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
