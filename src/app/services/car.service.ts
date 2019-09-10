import { Injectable } from '@angular/core';
import { CARS } from '../components/cars/mock-cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  getCars(){
    return CARS;
  }
  
}
