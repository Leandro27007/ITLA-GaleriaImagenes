import { Component } from '@angular/core';
import {LocalStorageService} from "../../Servicios/local-storage.service";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ImagenDetalleComponent} from "../imagen-detalle/imagen-detalle.component";
import { ImagenCreateComponent } from '../imagen-create/imagen-create.component';
import { ToastrService } from 'ngx-toastr';

interface Imagen {
  src: string;
  descripcion: string;
}

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgIf,
    ImagenDetalleComponent,
    ImagenCreateComponent
  ],
  templateUrl: './imagen.component.html',
  styleUrl: './imagen.component.css'
})
export class ImagenComponent {
  imagenes: { src: string, descripcion: string }[] = [];
  imagenSeleccionada: { src: string, descripcion: string } | null = null;
  modalAgregarAbierto: boolean = false;

  constructor(private localStorageService: LocalStorageService<{ src: string, descripcion: string}>, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.imagenes = this.localStorageService.getItem('imagenes') || [];
  }

  eliminarImagen(index: number): void {
    this.imagenes.splice(index, 1);
    this.localStorageService.setItem('imagenes', this.imagenes);
    this.toastr.success('Imagen eliminada con éxito');
  }

  verDetalle(imagen: { src: string, descripcion: string }): void {
    this.imagenSeleccionada = imagen;
  }

  cerrarDetalle(): void {
    this.imagenSeleccionada = null;
  }

  abrirModalAgregar(): void {
    this.modalAgregarAbierto = true;
  }

  cerrarModalAgregar(): void {
    this.modalAgregarAbierto = false;
  }

  onImagenAgregada(imagen: { src: string, descripcion: string }): void {
    this.imagenes.push(imagen);
  }
}
