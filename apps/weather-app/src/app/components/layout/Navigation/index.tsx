import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainNavigation } from '@penn/types';

import { DrawerNavigator } from './Drawer';

import { Header } from '../Header';

const RootStack = createStackNavigator();

export const Navigation: FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName={MainNavigation.Main}
      screenOptions={{
        header: () => <Header />,
        headerMode: 'float',
    }}
    >
      <RootStack.Screen
        name={MainNavigation.Main}
        component={DrawerNavigator}
      />
    </RootStack.Navigator>
  );
}
