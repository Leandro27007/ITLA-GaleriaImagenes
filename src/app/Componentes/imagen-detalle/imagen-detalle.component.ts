import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imagen-detalle',
  standalone: true,
  imports: [],
  templateUrl: './imagen-detalle.component.html',
  styleUrl: './imagen-detalle.component.css'
})
export class ImagenDetalleComponent {
  @Input() imagen: { src: string, descripcion: string } | null = null;
  @Output() cerrar = new EventEmitter<void>();

  cerrarModal(): void {
    this.cerrar.emit();
  }
}
