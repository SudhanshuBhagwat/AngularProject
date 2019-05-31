import { Component, OnInit, ElementRef, NgZone, ViewChild} from '@angular/core';
import { DataShareService } from '../data-share.service';
import { response } from '../services/prediction.service';
import { MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.css']
})
export class WindComponent implements OnInit {

  latitude:Number
  longitude:Number
  height:Number
  result:String
  isDisabled = false
  response:response

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private data: DataShareService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

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
    if(this.height > 0){
      this.result = undefined
      this.isDisabled = true
      setTimeout(() => {
        this.result = 'Hello There!!'
        this.isDisabled = false
      }, 2000)
    }else{
      this.result = 'Please fill in all the fields'
    }
  }

}
