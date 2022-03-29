import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteInicioSesionComponent } from './cliente-inicio-sesion.component';

describe('ClienteInicioSesionComponent', () => {
  let component: ClienteInicioSesionComponent;
  let fixture: ComponentFixture<ClienteInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteInicioSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
