// import { LatLng } from './services/prediction.service';

export interface train {
    "response": metrics,
    status:Number
}

export interface metrics {
    training_accuracy:String,
    validation_accuracy:String
}

export interface trainMetrics {
    learning_rate:Number,
    iterations:Number
}

export interface test {
    response:String,
    status:Number
}