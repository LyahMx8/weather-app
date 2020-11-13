import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from "@env/environment";
import {Weather} from '@core/_models/weather';

@Injectable({providedIn: 'root'})

export class WeatherService {

    constructor(private http: HttpClient) {
    }

    /**
     * Creates function to call an object from the weather service
     * @author Yimmy Motta 
     * @param lat:number = Latitude from the point/city
     * @param lon: number = Longitude from the point/city
     * @return weather objet
     */
    weatherService(lat, lon){
        return this.http.get<Weather[]>(`${environment.apiUrl}lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${environment.apiToken}`);
    }

    /**
     * Post test if it is needed in the implementation
     * @author Yimmy Motta 
     * @param parameterTest:array = the data from the form
     * @log data received for testing
     * @return An array or string of the answer from the backend to display to the user
     */
    // postTest(parameterTest) {
    //     console.log("testForm")
    //     console.log(parameterTest)
    //     const formData = new FormData();
    //     formData.append('test', parameterTest.name);
    //     return this.http.post<Comercio[]>(`${environment.apiUrl}registro-test`, formData);
    // }
}
