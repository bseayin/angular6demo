import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmgComponent } from './projectmg.component';

describe('ProjectmgComponent', () => {
  let component: ProjectmgComponent;
  let fixture: ComponentFixture<ProjectmgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectmgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
