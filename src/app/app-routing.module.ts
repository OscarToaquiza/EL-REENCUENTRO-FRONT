import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityHomeComponent } from './pages/activity-home/activity-home.component';
import { CampingComponent } from './pages/camping/camping.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EcologicalRoutesComponent } from './pages/ecological-routes/ecological-routes.component';
import { FarmComponent } from './pages/farm/farm.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { MissionComponent } from './pages/mission/mission.component';
import { ParedEscaladaComponent } from './pages/pared-escalada/pared-escalada.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { TreeHouseComponent } from './pages/tree-house/tree-house.component';
import { VisionComponent } from './pages/vision/vision.component';


const routes: Routes = [
  { path: '', component: HomeComponent , data: { titulo: 'Inicio - El Reencuentro' }},
  { path: 'inicio', component:HomeComponent, data: { titulo: 'Inicio - El Reencuentro' }},
  { path: 'mision', component:MissionComponent, data: { titulo: 'Misión - El Reencuentro' } },
  { path: 'vision', component:VisionComponent,  data: { titulo: 'Visión - El Reencuentro' } },
  { path: 'historia', component:HistoryComponent,  data: { titulo: 'Historia - El Reencuentro' } },
  { path: 'galeria', component:GaleryComponent,  data: { titulo: 'Galeria - El Reencuentro' } },
  { path: 'contactos', component: ContactComponent,  data: { titulo: 'Contacto - El Reencuentro' } },
  { path: 'ubicacion', component: LocationComponent,  data: { titulo: 'Ubicación - El Reencuentro' } },
  
  { path: 'actividades-general', component: ActivityHomeComponent,  data: { titulo: 'Actividades - El Reencuentro' } },
  { path: 'actividades-general/casa-arbol', component: TreeHouseComponent,  data: { titulo: 'Actividades - El Reencuentro' } },
  { path: 'actividades-general/pared-escalda', component: ParedEscaladaComponent,  data: { titulo: 'Pared Escalada - El Reencuentro' } },
  { path: 'actividades-general/camping', component: CampingComponent,  data: { titulo: 'Actividades - El Reencuentro' } },
  { path: 'actividades-general/granja', component: FarmComponent,  data: { titulo: 'Actividades - El Reencuentro' } },
  { path: 'actividades-general/restaurante', component: RestaurantComponent,  data: { titulo: 'Actividades - El Reencuentro' } },
  { path: 'actividades-general/sendero-ecologico', component: EcologicalRoutesComponent,  data: { titulo: 'Actividades - El Reencuentro' } },

  { path: '', redirectTo: '/inicio' , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
