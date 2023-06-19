import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPaymentComponent } from './success-payment.component';

describe('SuccessPaymentComponent', () => {
  let component: SuccessPaymentComponent;
  let fixture: ComponentFixture<SuccessPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
