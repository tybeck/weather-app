import { Geospatial } from './geospatial.types';
import { WeatherResponse } from './weather.types';

export type AppState = {
  isAppLoading: boolean;
  geospatial: Geospatial | null;
  weather: WeatherResponse | null;
  setGeospatialProfile: (geospatial: Geospatial) => void;
  setWeather: (weather: WeatherResponse) => void;
  setAppLoading: (loading: boolean) => void;
}
