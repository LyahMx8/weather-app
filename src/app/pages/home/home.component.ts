import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { WeatherService } from '@core/_services/weather.service';
import { CountriesService } from '@core/_services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public titleTxt = "Home - Weather App"
  public description = "Weather app es una web app que te muestra el clima desde antes de que suceda"

  public weather:any = []
  public currentWeather:any = []
  public countries:any = []
  public cityImage:any = []
  public photo:any = []

  constructor(
    private meta: Meta,
    private title: Title,
    private weatherService: WeatherService,
    private countriesService: CountriesService,
  ) {
    this.title.setTitle(this.titleTxt);
    // Añadir el tag de la info de la página
    this.meta.addTags([
      { name: 'description', content: this.description },
      { name: 'og:title', content: this.titleTxt },
      { name: 'og:image', content: '<nombre de la pagina> page' },
      { name: 'og:url', content: '<nombre de la pagina> page' },
      { name: 'og:description', content: this.description },
      { name: 'twitter:title', content: this.titleTxt },
      { name: 'twitter:description', content: this.description },
      { name: 'twitter:image', content: '<nombre de la pagina> page' }
    ]);
  }

  ngOnInit() {
    this.getCountries('col')
  }
  
  getCountries(country){
    this.countriesService.countries(country)
      .subscribe((data: any) => {
        this.countries = data;
        var capital = this.eliminarDiacriticos(this.countries.capital)
        this.getCityCountryImage(capital)
        if(!country){
          this.countries.map((r:any) => {
            console.log(r)
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
    this.countriesService.cityPhotos(city)
      .subscribe((data: any) => {
        this.cityImage = data;
        this.photo = this.cityImage.photos[0]
      }, err => {
        console.log(err)
      })
  }

  eliminarDiacriticos(text) {
    text = text.toLowerCase()
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g,"")
    return text;
  }

}
