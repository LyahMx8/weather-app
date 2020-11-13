/**
 * creates a model to receive data from the weather service
 */
export class Weather {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: any;
    daily: any;
}
