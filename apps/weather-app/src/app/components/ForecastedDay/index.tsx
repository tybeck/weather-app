import styled from 'styled-components/native';

import {DefaultTheme, Media} from '@penn/theme';
import {Typography} from '@penn-ui/common';
import {getDayOfWeek, getLazyFC} from '@penn/utils';
import {ForecastedDay as ForecastDay, Sizing} from '@penn/types';

type ForecastedDayProps = {
  day: ForecastDay;
}

export const ForecastedDay = getLazyFC<ForecastedDayProps>(({View}) => {
  const ForecastedDayView = View`
    background: ${DefaultTheme.colors.dynamicBlack};
    border-radius: ${DefaultTheme.size.xlarge}px;
    min-height: ${DefaultTheme.base * 54}px;
    min-width: ${DefaultTheme.base * 32}px;
    flex-direction: column;
    margin-right: 2.5%;
    margin-left: 2.5%;
    display: flex;
    width: 45%;
  `;

  const ForecastedDayHeading = View`
    display: flex;
    padding: ${DefaultTheme.size.medium}px;
    width: calc(100% - ${DefaultTheme.size.medium * 2}px);
    border-bottom: 1px solid ${DefaultTheme.colors.boltgunMetal};

    div {
      text-shadow: 1px 2px 2px #000;
    }
  `;

  const WeatherImage = View`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: ${DefaultTheme.size.medium}px;
  `;

  const Image = styled.Image`
    height: ${DefaultTheme.base * 24}px;
    width: ${DefaultTheme.base * 24}px;
  `;

  const ForecastedDayContentView = View``;

  const WeatherTemperature = View`
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      text-shadow: 2px 2px 6px #000, 1px 1px 2px #000;
    }
  `;

  return ({ day: { day, date } }) => {
    return (
      <ForecastedDayView>
        <ForecastedDayHeading>
          <Typography
            text={getDayOfWeek(date, true)}
            uppercase
            textCenter
            bold
          />
        </ForecastedDayHeading>
        <ForecastedDayContentView>
          <WeatherImage>
            <Image
              source={{uri: day.condition.icon}}
            />
          </WeatherImage>
          <WeatherTemperature>
            <Typography
              size={Sizing.Xlarge}
              text={`${day.avgtemp_f}°`}
              textCenter
              bold
            />
          </WeatherTemperature>
        </ForecastedDayContentView>
      </ForecastedDayView>
    )
  };
});
