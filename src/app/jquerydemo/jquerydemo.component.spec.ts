import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JquerydemoComponent } from './jquerydemo.component';

describe('JquerydemoComponent', () => {
  let component: JquerydemoComponent;
  let fixture: ComponentFixture<JquerydemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JquerydemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JquerydemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
