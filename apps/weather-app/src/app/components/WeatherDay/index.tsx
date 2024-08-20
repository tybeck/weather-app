import styled from 'styled-components/native';

import { getCurrentTime, getDayOfWeek, getLazyFC } from '@penn/utils';
import { useApp } from '@penn/context';
import {DefaultTheme, Media} from '@penn/theme';
import { Typography } from '@penn-ui/common';
import { Colors, Sizing } from '@penn/types';

import { LabelAndValue } from '../LabelAndValue';
import { Temperature } from '../Temperature';

export const WeatherDay = getLazyFC(({View}) => {
  const WeatherDayView = View`
    background: ${DefaultTheme.colors.firstRain};
    border-radius: ${DefaultTheme.size.xlarge}px;
    min-height: ${DefaultTheme.base * 54}px;
    min-width: ${DefaultTheme.base * 82}px;
    flex-direction: column;
    display: flex;
    margin-right: 0;
    width: 95%;

    ${Media.Md`
      width: 47.5%;
      margin-right: 2.5%;
    `}
  `;

  const WeatherDayViewHeading = View`
    background: ${DefaultTheme.colors.windBlue};
    padding: ${DefaultTheme.size.medium}px;
    border-top-left-radius: ${DefaultTheme.size.xlarge}px;
    border-top-right-radius: ${DefaultTheme.size.xlarge}px;
    flex-direction: row;
    display: flex;
  `;

  const WeatherDayColumnContainer = View`
    display: flex;
    flex-direction: row;
    padding: ${DefaultTheme.size.medium}px;
  `;

  const WeatherDayColumn = View`
    flex-direction: column;
    display: flex;
    width: 50%;
  `;

  const DayView = View`
    display: flex;
    flex: 1;
  `;

  const TimeView = View`
    justify-content: flex-end;
    display: flex;
    flex: 1;
  `;

  const LabelLeftView = View`
    margin-top: ${DefaultTheme.size.large}px;
  `;

  const CurrentTemperature = View`
    margin-top: ${DefaultTheme.size.large}px;
  `;

  const Image = styled.Image`
    height: ${DefaultTheme.base * 24}px;
    width: ${DefaultTheme.base * 24}px;
  `;

  const WeatherImage = View`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  `;

  return () => {
    const { weather } = useApp();

    if (weather?.current) {
      const currentDay = weather?.forecast?.forecastday[0];
      if (currentDay) {
        return (
          <WeatherDayView>
            <WeatherDayViewHeading>
              <DayView>
                <Typography
                  text={getDayOfWeek()}
                  size={Sizing.Medium}
                  color={Colors.GluonGrey}
                  bold
                />
              </DayView>
              <TimeView>
                <Typography
                  text={getCurrentTime()}
                  size={Sizing.Medium}
                  color={Colors.GluonGrey}
                  bold
                />
              </TimeView>
            </WeatherDayViewHeading>
            <WeatherDayColumnContainer>
              <WeatherDayColumn>
                <CurrentTemperature>
                  <Temperature value={weather.current.temp_f} />
                </CurrentTemperature>
                <LabelLeftView>
                  <LabelAndValue label="Real Feel" value={`${weather.current.feelslike_f}°`} />
                  <LabelAndValue label={`Wind ${weather.current.wind_dir}`} value={`${weather.current.wind_mph}mph`} />
                  <LabelAndValue label="Pressure" value={`${weather.current.pressure_mb}MB`} />
                  <LabelAndValue label="Humidity" value={`${weather.current.humidity}%`} />
                </LabelLeftView>
              </WeatherDayColumn>
              <WeatherDayColumn>
                <WeatherImage>
                  <Image
                    source={{uri: weather.current.condition.icon}}
                  />
                </WeatherImage>
                <LabelAndValue label="Sunrise" value={currentDay.astro.sunrise} />
                <LabelAndValue label="Sunset" value={currentDay.astro.sunset} />
              </WeatherDayColumn>
            </WeatherDayColumnContainer>
          </WeatherDayView>
        );
      }
    }

    return null;
  }
});
