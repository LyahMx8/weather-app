import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { WeatherService } from '@core/_services/weather.service';
import { CountriesService } from '@core/_services/countries.service';

@Component({
  selector: 'app-weather-cards',
  templateUrl: './weather-cards.component.html',
  styleUrls: ['./weather-cards.component.scss']
})
export class WeatherCardsComponent implements OnInit {

  public weather:any = []
  public countries:any = []
  public search: string = null;
  public results: any = [];
  noResult: boolean
  openSearch: boolean = false

  constructor(
    private weatherService: WeatherService,
    private countriesService: CountriesService,
  ) {
    this.noResult = false;
  }

  ngOnInit() {
    this.getCountries('col')
  }

  getCountries(country){
    this.countriesService.countries(country)
      .subscribe((data: any) => {
        this.countries = data
        if(!country){
          this.countries.map((r:any) => {
            console.log(r)
          })
        }else{
          this.countries.map(elem => {
            this.getWeather(elem.latlng[0],elem.latlng[1])
          })
        }
      }, err => {
        console.log(err)
      })
  }


  getWeather(lat,lng){
    this.weatherService.weatherService(lat,lng)
      .subscribe((data: any) => {
        this.weather = data;
        console.log(data)
      }, err => {
        console.log(err)
      })
  }

  initSearch() {
      if (this.search && this.search.length >= 3) {
          this.getCountries(this.search)
      } else {
          this.results = [];
      }
  }

  carouselOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
    }
  }

}
