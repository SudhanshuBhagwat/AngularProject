import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { predict } from '../earthquake/earthquake.component';
import { train, trainMetrics, test } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  url = 'http://35.240.199.139/';

  constructor(private http: HttpClient) { }

  getPrediction(prediction: predict):Observable<response>{
    return this.http.post<response>(this.url+'predict', prediction)
  }

  normalTrain():Observable<train>{
    return this.http.get<train>(this.url+'train')
  }

  customTrain(trainMetrics: trainMetrics):Observable<train>{
    return this.http.post<train>(this.url+'custom_train', trainMetrics)
  }

  testAPI():Observable<test>{
    return this.http.get<test>(this.url)
  }

}

export interface response{
  response:String,
  status:Number 
}
