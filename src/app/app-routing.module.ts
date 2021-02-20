import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./about/about.module').then( m => m.AboutModule)
  },
  {
    path: 'actividades-general',
    loadChildren: () => import('./activities/activities.module').then( m => m.ActivitiesModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./galery/galery.module').then( m => m.GaleryModule)
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./location/location.module').then( m => m.LocationModule)
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
