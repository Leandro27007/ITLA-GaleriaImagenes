import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenDetalleComponent } from './imagen-detalle.component';

describe('ImagenDetalleComponent', () => {
  let component: ImagenDetalleComponent;
  let fixture: ComponentFixture<ImagenDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
