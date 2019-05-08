import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeoLocComponent } from './geo-loc/geo-loc.component';

const routes: Routes = [
  { path: 'geo-loc', component: GeoLocComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
