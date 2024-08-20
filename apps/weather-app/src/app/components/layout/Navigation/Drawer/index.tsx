import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';

import { DrawerNavigation, RootDrawerParamList } from '@penn/types';
import { Home } from '@penn/screens';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigator() {
  const screenOptions: DrawerNavigationOptions = {
    header: () => null,
  };

  return (
    <Drawer.Navigator
      initialRouteName={DrawerNavigation.Home}
      screenOptions={screenOptions}
    >
      <Drawer.Screen
        name={DrawerNavigation.Home}
        component={Home}
      />
    </Drawer.Navigator>
  );
}

export {Drawer, DrawerNavigator};
