import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmoduleComponent } from './taskmodule.component';

describe('TaskmoduleComponent', () => {
  let component: TaskmoduleComponent;
  let fixture: ComponentFixture<TaskmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
