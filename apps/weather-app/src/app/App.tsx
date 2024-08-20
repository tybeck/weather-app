import React, { Suspense } from 'react';
import { Text } from 'react-native';
import { StyleSheetManager } from 'styled-components';

import { AppProvider } from '@penn/context';
import { MainScreen } from '@penn/screens';

import './LogBox';

import './App.css';

export default function App() {
  return (
    <Suspense
      fallback={
        <Text>Loading</Text>
      }
    >
      <AppProvider>
        <StyleSheetManager>
          <MainScreen />
        </StyleSheetManager>
      </AppProvider>
    </Suspense>
  );
}
