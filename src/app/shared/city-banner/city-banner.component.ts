import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '@core/_helpers/globals.service';
import { CountriesService } from '@core/_services/countries.service';
import { WeatherService } from '@core/_services/weather.service';

@Component({
  selector: 'app-city-banner',
  templateUrl: './city-banner.component.html',
  styleUrls: ['./city-banner.component.scss']
})
export class CityBannerComponent implements OnInit {

  public weather:any = []
  public currentWeather:any = []
  public countries:any = []
  public cityImage:any = []
  public photo:any = []

  constructor(
    private weatherService: WeatherService,
    private countriesService: CountriesService,
    private globalsService: GlobalsService,
  ) { }

  ngOnInit() {
    this.getCountries('col')
  }

  getCountries(country){
    this.countriesService.countries(country)
      .subscribe((data: any) => {
        this.countries = data[0];
        var capital = data[0].capital[0]
        this.getCityCountryImage(capital)
        if(!country){
          this.countries.map(elem => {
            this.getWeather(elem.latlng[0],elem.latlng[1])
          })
        }else{
          this.getWeather(this.countries.latlng[0],this.countries.latlng[1])
        }
      }, err => {
        console.log(err)
      })
  }

  getWeather(lat,lng){
    this.weatherService.weatherService(lat,lng)
      .subscribe((data: any) => {
        this.weather = data;
        this.currentWeather = this.weather.current.weather[0];
      }, err => {
        console.log(err)
      })
  }

  getCityCountryImage(city){
    city = this.globalsService.removeDiacritics(city)
    this.countriesService.cityPhotos(city)
      .subscribe((data: any) => {
        this.cityImage = data;
        this.photo = this.cityImage.photos[0]
      }, err => {
        console.log(err)
      })
  }

}
