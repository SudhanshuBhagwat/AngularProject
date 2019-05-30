import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  predict(){
    console.log('Predict')
  }

}
