import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Country} from '@core/_models/country';

@Injectable({providedIn: 'root'})

export class CountriesService {

    constructor(private http: HttpClient) {
    }

    countries(country){
        if(country){
            return this.http.get<Country>(`https://restcountries.com/v3.1/alpha/${country}`);
        } else {
            return this.http.get<Country>(`https://restcountries.com/v3.1/all`);
        }
    }

    cityPhotos(city){
        return this.http.get(`https://api.teleport.org/api/urban_areas/slug:${city}/images/`);
    }
}
