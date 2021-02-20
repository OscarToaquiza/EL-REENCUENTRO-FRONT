import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityHomeComponent } from './activity-home.component';
import { CampingComponent } from './camping/camping.component';
import { EcologicalRoutesComponent } from './ecological-routes/ecological-routes.component';
import { FarmComponent } from './farm/farm.component';
import { ParedEscaladaComponent } from './pared-escalada/pared-escalada.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { TreeHouseComponent } from './tree-house/tree-house.component';

const route: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ActivityHomeComponent,
      data: { 
        titulo: 'Actividades - El Reencuentro',
        descripcion:'Disfruta de actividades como: pared de escalada, camping y mucho más, ademas de nuestro excelente restaurante'
      } },
      { path: 'casa-arbol', component: TreeHouseComponent, 
      data: { 
        titulo: 'Case del árbol - El Reencuentro',
        descripcion:'Case del árbol - El Reencuentro'
      } },
      { path: 'pared-escalda', component: ParedEscaladaComponent, 
      data: { 
        titulo: 'Pared Escalada - El Reencuentro',
        descripcion:'Pared Escalada - El Reencuentro'
      } },
      { path: 'camping', component: CampingComponent, 
      data: { 
        titulo: 'Camping - El Reencuentro',
        descripcion:'Camping - El Reencuentro'
      } },
      { path: 'granja', component: FarmComponent, 
      data: { 
        titulo: 'Granja - El Reencuentro',
        descripcion:'Granja - El Reencuentro'
      } },
      { path: 'restaurante', component: RestaurantComponent, 
      data: { 
        titulo: 'Restaurante - El Reencuentro',
        descripcion:'Restaurante - El Reencuentro'
      } },
      { path: 'sendero-ecologico', component: EcologicalRoutesComponent, 
      data: { 
        titulo: 'Sendero Ecológico - El Reencuentro',
        descripcion:''
      } },
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(route)
  ]
})
export class ActivitiesRoutingModule { }
