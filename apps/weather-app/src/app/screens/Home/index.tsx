import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';

import { getLazyFC } from '@penn/utils';
import { useApp } from '@penn/context';
import {DefaultTheme, Media} from '@penn/theme';
import { WeatherErrorCode } from '@penn/types';
import { Typography } from '@penn-ui/common';

import { WeatherDay, ForecastedDay } from '../../components';
import {Loading} from "../../components/Loading";


export const Home: FC = getLazyFC(({View}) => {
  const HomeView = View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 100px);
    width: 100%;
  `;

  const WeatherView = View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;

    ${Media.Md`
      flex-direction: row;
    `}
  `;

  const LoadingView = View`
    width: ${DefaultTheme.base * 16}px;
    height: ${DefaultTheme.base * 16}px;
  `;

  const ForecastedView = View`
    margin-top: ${DefaultTheme.size.large}px;
    display: flex;
    width: 100%;

    ${Media.Md`
      margin-top: 0;
    `}
  `;

  return () => {
    const { isAppLoading, weather } = useApp();

    const getWeatherView = () => {
      if (weather?.error) {
        switch(weather?.error?.code) {
          case WeatherErrorCode.NoMatchingLocationFound:
            return <Typography text="No matching location found!" />
          default:
            return <Typography text="Unknown Error" />
        }
      }
      return (
        <WeatherView>
          <WeatherDay />
          <ForecastedView>
            {weather?.forecast?.forecastday.map((forecastedDay, forecastedIndex) => {
              if (forecastedIndex) {
                return <ForecastedDay
                  day={forecastedDay}
                  key={forecastedDay.date}
                />;
              }
              return null;
            })}
          </ForecastedView>
        </WeatherView>
      );
    };

    return (
      <HomeView>
        {isAppLoading &&
          <LoadingView>
            <Loading />
          </LoadingView>
        }
        {!isAppLoading && weather && getWeatherView()}
      </HomeView>
    );
  }
});
