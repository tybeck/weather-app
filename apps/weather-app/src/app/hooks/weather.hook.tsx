import { useEffect, useState } from 'react';

import { WeatherResponse } from '@penn/types';
import { useApp } from '@penn/context';

// Should be pulled in via environment variables
const KEY = `8d1e0bf966d54d94ab7213735212904`;

export const useWeather = () => {
  const { setAppLoading, setWeather } = useApp();
  const [location, setLocation] = useState<string>('');

  const get = async () => {
    setAppLoading(true);
    const response = await fetch(
      [
        `http://api.weatherapi.com/v1/forecast.json?key=`,
        KEY,
        `&q=`,
        location,
        `&days=3&aqi=no&alerts=no`,
      ].join(''),
    );
    const weatherResponse = await response.json() as WeatherResponse;
    setWeather(weatherResponse);
    setAppLoading(false);
  };

  useEffect(() => {
    if (location) {
      get();
    }
  }, [location]);

  return {
    location,
    setLocation,
  }
};
