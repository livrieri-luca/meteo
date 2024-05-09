import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappaMeteoComponent } from './mappa-meteo.component';

describe('MappaMeteoComponent', () => {
  let component: MappaMeteoComponent;
  let fixture: ComponentFixture<MappaMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MappaMeteoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MappaMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
