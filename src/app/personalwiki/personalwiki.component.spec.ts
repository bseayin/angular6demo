import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalwikiComponent } from './personalwiki.component';

describe('PersonalwikiComponent', () => {
  let component: PersonalwikiComponent;
  let fixture: ComponentFixture<PersonalwikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalwikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalwikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
