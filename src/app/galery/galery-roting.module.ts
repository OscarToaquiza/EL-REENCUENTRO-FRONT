import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GaleryComponent } from './galery.component';

const route: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: GaleryComponent,
        data: { 
          titulo: 'Galeria - El Reencuentro',
          descripcion: 'Mira nuestros paisajes mas hermosos de nuestra localidad'
        }
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ]
})
export class GaleryRotingModule { }
