import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';


@NgModule({
  declarations: [
    OneComponent,
    TwoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
