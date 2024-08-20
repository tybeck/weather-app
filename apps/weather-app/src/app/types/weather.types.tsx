export enum WeatherErrorCode {
  NoMatchingLocationFound = 1006,
}

type WeatherError = {
  code: WeatherErrorCode;
  message: string;
}

type WeatherDay = {
  feelslike_f: number;
  temp_f: number;
  wind_mph: number;
  wind_dir: string;
  pressure_mb: number;
  humidity: number;
  condition: {
    icon: string;
  }
}

export type ForecastedDay = {
  astro: {
    sunrise: string;
    sunset: string;
  }
  date: string;
  day: {
    condition: {
      icon: string;
    }
    avgtemp_f: number;
  }
}

export type WeatherResponse = {
  error?: WeatherError;
  current?: WeatherDay;
  forecast?: {
    forecastday: ForecastedDay[];
  }
}
