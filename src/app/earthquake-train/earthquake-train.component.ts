import { Component, OnInit } from '@angular/core';
import { PredictionService } from '../services/prediction.service';

@Component({
  selector: 'app-earthquake-train',
  templateUrl: './earthquake-train.component.html',
  styleUrls: ['./earthquake-train.component.css']
})
export class EarthquakeTrainComponent implements OnInit {

  learningRate:Number
  iterations:Number
  result:String

  constructor(private prediction: PredictionService) { }

  ngOnInit() {
  }

  customTrain(){
    this.prediction.customTrain({
      learning_rate: this.learningRate,
      iterations: this.iterations
    }).subscribe(res => {
      this.result = `Training Accuracy: ${res.response.training_accuracy} and Validation Accuracy: ${res.response.validation_accuracy}`
    })
  }

  train(){
    this.prediction.normalTrain().subscribe(res => {
      this.result = `Training Accuracy: ${res.response.training_accuracy} and Validation Accuracy: ${res.response.validation_accuracy}`
    })
  }

}
