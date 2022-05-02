import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { WeatherCardsComponent } from './weather-cards/weather-cards.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CityBannerComponent } from './city-banner/city-banner.component';
import { DaysForecastComponent } from './days-forecast/days-forecast.component';
import { PlacesToVisitComponent } from './places-to-visit/places-to-visit.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    WeatherCardsComponent,
    CityBannerComponent,
    DaysForecastComponent,
    PlacesToVisitComponent,
    ReviewsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  exports: [
    WeatherCardsComponent,
    CityBannerComponent,
    DaysForecastComponent,
    PlacesToVisitComponent,
    ReviewsComponent
  ]
})
export class SharedModule { }

