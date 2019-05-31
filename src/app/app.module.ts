import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { EarthquakeComponent } from './earthquake/earthquake.component';
import { WindComponent } from './wind/wind.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EarthquakeTrainComponent } from './earthquake-train/earthquake-train.component';
import { WindTrainComponent } from './wind-train/wind-train.component';
import { EparentComponent } from './eparent/eparent.component';
import { WparentComponent } from './wparent/wparent.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EarthquakeComponent,
    WindComponent,
    EarthquakeTrainComponent,
    WindTrainComponent,
    EparentComponent,
    WparentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDrQVh-mNx9pyWfsX1fKLUUTZ9kEIefqg',
      libraries: ["places", "visualization"]
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
