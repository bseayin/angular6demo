import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamfilesComponent } from './teamfiles.component';

describe('TeamfilesComponent', () => {
  let component: TeamfilesComponent;
  let fixture: ComponentFixture<TeamfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
