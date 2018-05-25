import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetingmoduleComponent } from './setingmodule.component';

describe('SetingmoduleComponent', () => {
  let component: SetingmoduleComponent;
  let fixture: ComponentFixture<SetingmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetingmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetingmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
