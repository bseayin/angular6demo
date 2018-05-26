import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussmoduleComponent } from './discussmodule.component';

describe('DiscussmoduleComponent', () => {
  let component: DiscussmoduleComponent;
  let fixture: ComponentFixture<DiscussmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
