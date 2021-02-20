import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryComponent } from './galery.component';
import { GaleryRotingModule } from './galery-roting.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    GaleryComponent
  ],
  imports: [
    CommonModule,
    GaleryRotingModule,
    TranslocoModule
  ]
})
export class GaleryModule { }
