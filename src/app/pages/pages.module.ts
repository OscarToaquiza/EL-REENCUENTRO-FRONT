import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { GaleryComponent } from './galery/galery.component';
import { VisionComponent } from './vision/vision.component';
import { MissionComponent } from './mission/mission.component';
import { ParedEscaladaComponent } from './pared-escalada/pared-escalada.component';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    HistoryComponent,
    GaleryComponent,
    VisionComponent,
    MissionComponent,
    ParedEscaladaComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
