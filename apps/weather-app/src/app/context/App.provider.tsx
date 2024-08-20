import { useContext, createContext, FC, PropsWithChildren, useState, useEffect } from 'react';
import styled from 'styled-components/native';

import {AppState, Geospatial, WeatherResponse} from '@penn/types';

const AppContext = createContext<AppState>({} as AppState);

const AppProviderView = styled.View`
  flex: 1;
`;

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [geospatial, setGeospatial] = useState<Geospatial | null>(null);
  const [isAppLoading, setAppLoading] = useState<boolean>(false);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  const setGeospatialProfile = (geospatialProfile: Geospatial = {}, store = true) => {
    const latestGeospatialProfile = {
      ...geospatial,
      ...geospatialProfile,
    };
    setGeospatial(latestGeospatialProfile);
    if (store) {
      localStorage.setItem(`geospatial`, JSON.stringify(latestGeospatialProfile));
    }
  };

  useEffect(() => {
    const geospatial: Geospatial = JSON.parse(localStorage.getItem(`geospatial`) || '{}');
    if (
      geospatial &&
      Object.keys(geospatial).length
    ) {
      setGeospatialProfile(geospatial, false);
    }
  }, []);

  const context: AppState = {
    isAppLoading,
    geospatial,
    weather,
    setGeospatialProfile,
    setAppLoading,
    setWeather,
  };

  return (
    <AppContext.Provider value={context}>
      <AppProviderView>
        {children}
      </AppProviderView>
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
