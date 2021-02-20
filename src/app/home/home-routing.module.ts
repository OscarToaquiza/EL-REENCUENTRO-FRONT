import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const route : Routes = [
  {
    path: '',
    children:[
      {
        path: '', 
        component: HomeComponent,
        data: { 
          titulo: 'Inicio - El Reencuentro', 
          descripcion: 'El Reencuentro, abre sus puertas a los amantes de la Aventura y Naturaleza con la  apertura de la primera pared de escalada dentro de la parroquia de Machachi, para experimentados y principiantes que quieran formar parte de la práctica de este deporte y conocer más del turismo rural del Barrio Puichig' 
        }
      }
    ]
  }
]



@NgModule({
  imports: [
    RouterModule.forChild(route)
  ]
})
export class HomeRoutingModule { }
