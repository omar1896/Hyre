import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSubscriptionComponent } from './change-subscription.component';

describe('ChangeSubscriptionComponent', () => {
  let component: ChangeSubscriptionComponent;
  let fixture: ComponentFixture<ChangeSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
