import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembermgComponent } from './membermg.component';

describe('MembermgComponent', () => {
  let component: MembermgComponent;
  let fixture: ComponentFixture<MembermgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembermgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembermgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
