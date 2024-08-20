import React, { FC } from 'react';

import { GeolocateInput, WeatherInput } from '@penn-ui/common';
import {DefaultTheme, Media} from '@penn/theme';
import { getLazyFC } from '@penn/utils';

export const Header: FC = getLazyFC(({View}) => {
  const HeaderContainer = View`
    min-height: ${DefaultTheme.size.large * 5}px;
    padding: ${DefaultTheme.size.xxlarge}px;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    transition: 500ms all ease;
    flex: 1;

    ${Media.Md`
      flex-direction: row;
    `}
  `;

  return () => {
    return (
      <HeaderContainer>
        <GeolocateInput/>
        <WeatherInput/>
      </HeaderContainer>
    );
  }
});
