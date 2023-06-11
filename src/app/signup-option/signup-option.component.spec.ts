import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOptionComponent } from './signup-option.component';

describe('SignupOptionComponent', () => {
  let component: SignupOptionComponent;
  let fixture: ComponentFixture<SignupOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
