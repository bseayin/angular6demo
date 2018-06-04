import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikimoduleComponent } from './wikimodule.component';

describe('WikimoduleComponent', () => {
  let component: WikimoduleComponent;
  let fixture: ComponentFixture<WikimoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikimoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikimoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
