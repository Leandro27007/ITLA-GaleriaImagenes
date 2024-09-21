import { Component, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from '../../Servicios/local-storage.service';
import { FormsModule } from '@angular/forms';
import {NgIf} from "@angular/common";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-imagen-create',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './imagen-create.component.html',
  styleUrl: './imagen-create.component.css'
})
export class ImagenCreateComponent {
  @Output() cerrar = new EventEmitter<void>();
  @Output() imagenAgregada = new EventEmitter<{ src: string, descripcion: string }>();
  descripcion: string = '';
  imagenBase64: string | null = null;

  constructor(private localStorageService: LocalStorageService<{ src: string, descripcion: string }>, private toastr: ToastrService) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenBase64 = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  agregarImagen(): void {
    if (this.imagenBase64 && this.descripcion) {
      const nuevaImagen = { src: this.imagenBase64, descripcion: this.descripcion };
      const imagenes = this.localStorageService.getItem('imagenes') || [];
      imagenes.push(nuevaImagen);
      this.localStorageService.setItem('imagenes', imagenes);
      this.imagenAgregada.emit(nuevaImagen);
      this.toastr.success('Imagen agregada con éxito');
      this.cerrarModal();
    }else {
      this.toastr.error('Por favor, complete todos los campos');
    }
  }

  cerrarModal(): void {
    this.cerrar.emit();
  }
}
