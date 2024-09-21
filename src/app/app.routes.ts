import { Routes } from '@angular/router';
import {ImagenComponent} from "./Componentes/imagen/imagen.component";

export const routes: Routes = [
  { path: '', redirectTo: 'imagen', pathMatch: 'full' },
  { path: 'imagen', component: ImagenComponent },
];
