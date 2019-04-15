import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTmpltFrmComponent } from './customerTmpltFrm.component';

describe('CustomerTmpltFrmComponent', () => {
  let component: CustomerTmpltFrmComponent;
  let fixture: ComponentFixture<CustomerTmpltFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTmpltFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTmpltFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
