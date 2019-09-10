import { CARS } from './mock-cars';
import { Component } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Cars } from './cars';

@Component({
    selector: 'app-cars-list',
    template: `
      <div *ngFor="let car of cars">
        {{car.id}} : {{car.name}} - {{car.maker}}
        ({{car.isIndian ? 'Indian' : 'Imported'}})
      </div>
    `,
})
export class CarsListComponent {
    cars : Cars[];
    
    constructor(private carService: CarService){
        //this.cars = CARS;
        this.cars = carService.getCars(); 
    }
}