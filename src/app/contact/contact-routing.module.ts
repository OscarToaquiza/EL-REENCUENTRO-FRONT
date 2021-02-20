import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

const route: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: ContactComponent,
        data: { 
          titulo: 'Contacto - El Reencuentro',
          descripcion: 'Reservas, sugerencias, contactos y criticas constructivas, estarémos atententos para responder'
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
export class ContactRoutingModule { }
