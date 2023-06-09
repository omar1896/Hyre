import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedButtonComponent } from './rounded-button.component';

describe('RoundedButtonComponent', () => {
  let component: RoundedButtonComponent;
  let fixture: ComponentFixture<RoundedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundedButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should have a title' , ()=>{
    expect(typeof(component.title)).toBe('string')
  })
  it('Should have a color' , ()=>{
    expect(typeof(component.color)).toBe('string')
    expect(component.color).toContain('#')
  })
});
