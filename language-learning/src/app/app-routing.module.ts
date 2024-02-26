import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";



const routes: Routes = [
  { path: '', component: HomeComponent }, // Example of a default route
  { path: '*', component: HomeComponent }, // Example of a default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
