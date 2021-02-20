import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisionComponent } from './vision/vision.component';
import { MissionComponent } from './mission/mission.component';
import { HistoryComponent } from './history/history.component';
import { AboutRoutingModule } from './about-routing.module';
import { TranslocoModule } from '@ngneat/transloco';



@NgModule({
  declarations: [
    VisionComponent,
    MissionComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    TranslocoModule
  ]
})
export class AboutModule { }
