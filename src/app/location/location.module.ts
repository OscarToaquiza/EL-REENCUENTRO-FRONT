import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { LocationRotingModule } from './location-roting.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    LocationRotingModule,
    TranslocoModule
  ]
})
export class LocationModule { }
