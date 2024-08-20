import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { css } from 'styled-components/native';

import { Colors, Sizing } from '@penn/types';
import { getLazyFC } from '@penn/utils';
import { useGeoLocate } from '@penn/hooks';
import { DefaultTheme, Media } from '@penn/theme';

import {Typography} from '../Typography';

export const GeolocateInput: FC = getLazyFC(({ View }) => {
  const GeolocateInputView = View`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    margin-top: ${DefaultTheme.size.medium}px;

    ${Media.Md`
      flex: 0 1 calc(50% - 175px);
      margin-top: 0;
    `}

    svg {
      outline: 0 none;
    }
  `;

  const GeolocateInnerButton = View<{ $hasGeospatial: boolean, $isClickable: boolean }>`
    display: flex;
    align-items: center;
    flex-direction: row;
    background: ${DefaultTheme.colors.windBlue};
    padding: ${DefaultTheme.size.medium}px;
    border-radius: ${DefaultTheme.size.medium}px;

    ${(props) => props.$isClickable &&
      css`
        cursor: pointer;
      `}

    &:hover {
      background: ${DefaultTheme.colors.firstRain};

      div {
        font-weight: bold;
      }
    }

    ${(props) => props.$hasGeospatial &&
      css`
        background: transparent;

        &:hover {
          background: transparent;

          div {
            font-weight: normal;
          }
        }
      `}
  `;

  const IconView = View`
    margin-right: ${DefaultTheme.size.small}px;
    margin-top: ${DefaultTheme.size.small / 2}px;
  `;

  return () => {
    const {
      getPermission,
      geospatial,
      isLoading,
    } = useGeoLocate();

    const getLocationText = () => {
      if (isLoading) {
        return `Loading...`;
      }
      if (geospatial) {
        return `${geospatial.city}, ${geospatial.state}`;
      }
      return `Locate Me`;
    };

    return (
      <GeolocateInputView>
        <GeolocateInnerButton
          onClick={(!geospatial && !isLoading) ? getPermission : undefined}
          $isClickable={(geospatial === null && !isLoading)}
          $hasGeospatial={geospatial !== null}
        >
          <IconView>
            <FontAwesomeIcon
              color={geospatial ? Colors.White : Colors.GluonGrey}
              size={DefaultTheme.fontSize.medium}
              icon={faLocationDot}
            />
          </IconView>
          <Typography
            size={Sizing.Medium}
            color={geospatial ? Colors.White : Colors.GluonGrey}
            text={getLocationText()}
          />
        </GeolocateInnerButton>
      </GeolocateInputView>
    )
  }
});
