import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaMeteoComponent } from './ricerca-meteo.component';

describe('RicercaMeteoComponent', () => {
  let component: RicercaMeteoComponent;
  let fixture: ComponentFixture<RicercaMeteoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RicercaMeteoComponent]
    });
    fixture = TestBed.createComponent(RicercaMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});