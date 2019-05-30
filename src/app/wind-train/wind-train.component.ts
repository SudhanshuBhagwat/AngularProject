import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wind-train',
  templateUrl: './wind-train.component.html',
  styleUrls: ['./wind-train.component.css']
})
export class WindTrainComponent implements OnInit {

  learningRate:Number
  iterations:Number
  result:String

  constructor() { }

  ngOnInit() {
  }

  train(){
    console.log('Hello')
  }

  customTrain(){
    console.log('Hello')
  }

}
