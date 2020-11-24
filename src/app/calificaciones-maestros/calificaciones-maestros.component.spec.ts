import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesMaestrosComponent } from './calificaciones-maestros.component';

describe('CalificacionesMaestrosComponent', () => {
  let component: CalificacionesMaestrosComponent;
  let fixture: ComponentFixture<CalificacionesMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
