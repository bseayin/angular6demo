import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinddemoComponent } from './binddemo.component';

describe('BinddemoComponent', () => {
  let component: BinddemoComponent;
  let fixture: ComponentFixture<BinddemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinddemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
