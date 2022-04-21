export interface WeatherInterface {
    location: {
        name: string;
        region: string;
        country: string;
        tz_id: string;
    },
    current: {

        condition: string;
        temp_c: number;
        temp_f: number;
        last_updated: string;
        wind_mph: number;
        wind_kph: number;
    }
}
