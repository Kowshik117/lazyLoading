import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailerRoutingModule } from './retailer-routing.module';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';


@NgModule({
  declarations: [
    ThreeComponent,
    FourComponent
  ],
  imports: [
    CommonModule,
    RetailerRoutingModule
  ]
})
export class RetailerModule { }
