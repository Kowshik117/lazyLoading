import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';

const routes: Routes = [
  {path:'five', component: FiveComponent},
  {path: "six", component: SixComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
