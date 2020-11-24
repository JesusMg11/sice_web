import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMaestrosComponent } from './inicio-maestros.component';

describe('InicioMaestrosComponent', () => {
  let component: InicioMaestrosComponent;
  let fixture: ComponentFixture<InicioMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
