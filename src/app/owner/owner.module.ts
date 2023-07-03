import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';


@NgModule({
  declarations: [
    FiveComponent,
    SixComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
