import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamwikiComponent } from './teamwiki.component';

describe('TeamwikiComponent', () => {
  let component: TeamwikiComponent;
  let fixture: ComponentFixture<TeamwikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamwikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamwikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
