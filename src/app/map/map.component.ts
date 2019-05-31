import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  latitude = 23.14756761567721
  longitude = 82.6984425712389
  zoom = 4.82
  latlong: LatLong

  onChosenLocation(event){
    console.log(event.coords)
    this.data.changeMessage({
      latitude: event.coords.lat,
      longitude: event.coords.lng
    })
  }

  constructor(private data: DataShareService) { }

  ngOnInit() {
    this.data.current.subscribe(latlong => this.latlong = latlong)
  }

}

export interface LatLong {
  latitude:Number,
  longitude:Number
}
