import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootAppComponent } from './root-app.component';

describe('RootAppComponent', () => {
  let component: RootAppComponent;
  let fixture: ComponentFixture<RootAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
