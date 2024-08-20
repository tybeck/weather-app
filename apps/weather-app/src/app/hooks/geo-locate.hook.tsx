import { useApp } from '@penn/context';
import { GeospatialResponse } from '@penn/types';
import {useState} from "react";

// Should be pulled in via environment variables
const KEY = `562f47c172f149ce86e599ed1794e924`;

export const useGeoLocate = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    setGeospatialProfile,
    geospatial,
  } = useApp();

  const getCurrentPosition = async (position: GeolocationPosition) => {
    if (position) {
      const {coords: {latitude, longitude}} = position;

      const response = await fetch(
        [
          `https://api.opencagedata.com/geocode/v1/json?key=`,
          KEY,
          `&q=`,
          latitude,
          `%2C`,
          longitude,
          `&pretty=1&no_annotations=1`,
        ]
          .join(''),
      );
      const {
        results: [{components: {village: city, state_code: state, postcode: zipcode}}],
      } = await response.json() as GeospatialResponse;
      setGeospatialProfile({
        city,
        state,
        zipcode,
        latitude,
        longitude
      });
    }
    setIsLoading(false);
  };

  const permissionError = () => setIsLoading(false);

  const getPermission = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(getCurrentPosition, permissionError);
    }
  };

  return {
    getPermission,
    isLoading,
    geospatial,
  };
};
