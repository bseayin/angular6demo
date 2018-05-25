import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncdocmgComponent } from './funcdocmg.component';

describe('FuncdocmgComponent', () => {
  let component: FuncdocmgComponent;
  let fixture: ComponentFixture<FuncdocmgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncdocmgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncdocmgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
