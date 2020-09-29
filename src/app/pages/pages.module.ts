import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { GaleryComponent } from './galery/galery.component';
import { VisionComponent } from './vision/vision.component';
import { MissionComponent } from './mission/mission.component';
import { ParedEscaladaComponent } from './pared-escalada/pared-escalada.component';
import { LocationComponent } from './location/location.component';
import { ActivityHomeComponent } from './activity-home/activity-home.component';
import { TreeHouseComponent } from './tree-house/tree-house.component';
import { FarmComponent } from './farm/farm.component';
import { EcologicalRoutesComponent } from './ecological-routes/ecological-routes.component';
import { SportFishingComponent } from './sport-fishing/sport-fishing.component';
import { MiniSpaComponent } from './mini-spa/mini-spa.component';
import { CampingComponent } from './camping/camping.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    HistoryComponent,
    GaleryComponent,
    VisionComponent,
    MissionComponent,
    ParedEscaladaComponent,
    LocationComponent,
    ActivityHomeComponent,
    TreeHouseComponent,
    FarmComponent,
    EcologicalRoutesComponent,
    SportFishingComponent,
    MiniSpaComponent,
    CampingComponent,
    RestaurantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
