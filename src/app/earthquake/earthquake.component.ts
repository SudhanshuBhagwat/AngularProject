/// <reference types="@types/googlemaps" />
import { Component, OnInit, ElementRef, NgZone, ViewChild} from '@angular/core';
import { DataShareService } from '../data-share.service';
import { PredictionService } from '../services/prediction.service';
import { response } from '../services/prediction.service';
import { MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-earthquake',
  templateUrl: './earthquake.component.html',
  styleUrls: ['./earthquake.component.css']
})
export class EarthquakeComponent implements OnInit {

  latitude:Number
  longitude:Number
  depth:Number
  date:String
  response:response
  result:String
  isDisabled = false

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private data: DataShareService, private prediction: PredictionService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {   }

  ngOnInit() {
    this.data.current.subscribe(latlong => {
      this.latitude = latlong.latitude
      this.longitude = latlong.longitude
    })
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["(cities)"],
        componentRestrictions: {country: "in"}
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
        });
      });
    });
  }

  predict(){
    if(this.depth > 0 && this.date.length > 0){
      this.isDisabled = true
      this.result = undefined
      this.prediction.getPrediction({
        latitude: this.latitude,
        longitude: this.longitude,
        depth: this.depth,
        date: this.date
      }).subscribe(res => {
        this.result = res.response
        this.isDisabled = false
      });
    }else{
      this.result = 'Please fill in all the fields'
    }
  }

}

export interface predict {
  latitude:Number
  longitude:Number
  depth:Number
  date:String
}
