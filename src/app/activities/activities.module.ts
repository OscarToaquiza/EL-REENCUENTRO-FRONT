import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampingComponent } from './camping/camping.component';
import { EcologicalRoutesComponent } from './ecological-routes/ecological-routes.component';
import { FarmComponent } from './farm/farm.component';
import { MiniSpaComponent } from './mini-spa/mini-spa.component';
import { ParedEscaladaComponent } from './pared-escalada/pared-escalada.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SportFishingComponent } from './sport-fishing/sport-fishing.component';
import { TreeHouseComponent } from './tree-house/tree-house.component';
import { ActivityHomeComponent } from './activity-home.component';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { TranslocoModule } from '@ngneat/transloco';


@NgModule({
  declarations: [
    ActivityHomeComponent,
    CampingComponent,
    EcologicalRoutesComponent,
    FarmComponent,
    MiniSpaComponent,
    ParedEscaladaComponent,
    RestaurantComponent,
    SportFishingComponent,
    TreeHouseComponent
  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    TranslocoModule
  ]
})
export class ActivitiesModule { }
