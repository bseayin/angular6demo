import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsetComponent } from './basicset.component';

describe('BasicsetComponent', () => {
  let component: BasicsetComponent;
  let fixture: ComponentFixture<BasicsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
