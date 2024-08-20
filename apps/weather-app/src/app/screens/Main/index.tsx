import React, { FC } from 'react';
import styled from 'styled-components/native';
import { LinkingOptions, NavigationContainer, DefaultTheme as NavigationDefaultTheme, Theme } from '@react-navigation/native';

import { RootDrawerParamList } from '@penn/types';
import { DefaultTheme } from '@penn/theme';
import { Navigation } from '@penn/layout';

type MainScreenProps = {};

const linkingOptions: LinkingOptions<RootDrawerParamList> = {
  prefixes: ['http://'],
  enabled: true,
};

const RootView = styled.SafeAreaView`
  background: ${DefaultTheme.colors.ruinedSmores};
  display: flex;
  flex: 1;
`;

const RootTheme: Theme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: DefaultTheme.colors.ruinedSmores,
  }
};

export const MainScreen: FC<MainScreenProps> = () => {
  return (
    <RootView>
      <NavigationContainer theme={RootTheme} linking={linkingOptions}>
        <Navigation />
      </NavigationContainer>
    </RootView>
  );
};
