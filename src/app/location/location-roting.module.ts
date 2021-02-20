import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location.component';

const route : Routes = [
  {
    path: '',
    children:[
      { path: '', component: LocationComponent,
        data: { 
          titulo: 'Ubicación - El Reencuentro',
          descripcion: '¿ Como llegar desde tu ubicación ?, mira las referencias y el mapa exacto.'
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
export class LocationRotingModule { }
