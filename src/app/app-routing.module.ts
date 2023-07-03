import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', loadChildren:()=>import("./admin/admin.module").then(mod=>mod.AdminModule)},
  {path:'retailer', loadChildren: ()=> import("./retailer/retailer.module").then(mod=>mod.RetailerModule)},
 {path:'owner', loadChildren:()=>import("./owner/owner.module").then(mod=> mod.OwnerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
