import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LatLong } from './map/map.component';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private messageSource = new BehaviorSubject<LatLong>({
    latitude: 23.14756761567721,
    longitude: 82.69844257123896 
  });
  current = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: LatLong) {
    this.messageSource.next(message)
  }

}
