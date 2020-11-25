import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionMaestrosComponent } from './informacion-maestros.component';

describe('InformacionMaestrosComponent', () => {
  let component: InformacionMaestrosComponent;
  let fixture: ComponentFixture<InformacionMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
