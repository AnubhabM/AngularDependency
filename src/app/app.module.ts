import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarsListComponent } from './components/cars/cars-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
