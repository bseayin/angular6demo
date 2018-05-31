import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fileuploaddemo1Component } from './fileuploaddemo1.component';

describe('Fileuploaddemo1Component', () => {
  let component: Fileuploaddemo1Component;
  let fixture: ComponentFixture<Fileuploaddemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fileuploaddemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fileuploaddemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
