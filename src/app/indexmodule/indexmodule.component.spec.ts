import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexmoduleComponent } from './indexmodule.component';

describe('IndexmoduleComponent', () => {
  let component: IndexmoduleComponent;
  let fixture: ComponentFixture<IndexmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
