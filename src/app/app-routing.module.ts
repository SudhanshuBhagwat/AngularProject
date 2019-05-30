import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EparentComponent } from './eparent/eparent.component';
import { WparentComponent } from './wparent/wparent.component';
import { WindComponent } from './wind/wind.component';
import { WindTrainComponent } from './wind-train/wind-train.component';
import { EarthquakeComponent } from './earthquake/earthquake.component';
import { EarthquakeTrainComponent } from './earthquake-train/earthquake-train.component';

const routes: Routes = [ 
  { path: 'earthquake', component: EparentComponent ,
    children: [
      {path: 'epredict', component: EarthquakeComponent},
      {path: 'etrain', component: EarthquakeTrainComponent}
    ]},
  { path: 'wind', component: WparentComponent ,
    children: [
      {path: 'wpredict', component: WindComponent},
      {path: 'wtrain', component: WindTrainComponent}
    ]}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
