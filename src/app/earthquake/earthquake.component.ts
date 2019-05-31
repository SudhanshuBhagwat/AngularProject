import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';
import { PredictionService } from '../services/prediction.service';
import { response } from '../services/prediction.service';

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

  constructor(private data: DataShareService, private prediction: PredictionService) { }

  ngOnInit() {
    this.data.current.subscribe(latlong => {
      this.latitude = latlong.latitude
      this.longitude = latlong.longitude
    })
  }

  predict(){
    this.prediction.getPrediction({
      latitude: this.latitude,
      longitude: this.longitude,
      depth: this.depth,
      date: this.date
    }).subscribe(res => {
      this.result = res.response
    });
  }

}

export interface predict {
  latitude:Number
  longitude:Number
  depth:Number
  date:String
}
