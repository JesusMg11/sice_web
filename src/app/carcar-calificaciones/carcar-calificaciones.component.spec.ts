import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcarCalificacionesComponent } from './carcar-calificaciones.component';

describe('CarcarCalificacionesComponent', () => {
  let component: CarcarCalificacionesComponent;
  let fixture: ComponentFixture<CarcarCalificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarcarCalificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarcarCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
