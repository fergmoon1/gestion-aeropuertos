import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AeropuertosPage } from './aeropuertos.page';

describe('AeropuertosPage', () => {
  let component: AeropuertosPage;
  let fixture: ComponentFixture<AeropuertosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AeropuertosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
