import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardComponent } from './info-card.component';

describe('InfoCardComponent', () => {
  let component: InfoCardComponent;
  let fixture: ComponentFixture<InfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have monthly price', () => {
    expect(typeof(component.monthlyPrice)).toBe('string');
  });
  it('should have annually price', () => {
    expect(typeof(component.annuallyPrice)).toBe('string');
  });
  it('should have type', () => {
    expect(typeof(component.type)).toBe('string');
  });
  it('should have description', () => {
    expect(typeof(component.description)).toBe('string');
  });
  it('should have image', () => {
    expect(typeof(component.image)).toBe('string');
  });
  it('should have btnColor', () => {
    expect(typeof(component.btnColor)).toBe('string');
  });
});
