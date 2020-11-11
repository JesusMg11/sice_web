import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestrosAdminComponent } from './maestros-admin.component';

describe('MaestrosAdminComponent', () => {
  let component: MaestrosAdminComponent;
  let fixture: ComponentFixture<MaestrosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestrosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestrosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
