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
  isDisabled = false

  constructor() { }

  ngOnInit() {
  }

  train(){
    this.result = undefined
    this.isDisabled = true
    setTimeout(() => {
      this.result = 'Hello There!!'
      this.isDisabled = false
    }, 2000)
  }

  customTrain(){
    if(this.learningRate > 0 && this.iterations > 0){
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
