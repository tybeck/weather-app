import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';

import { getLazyFC } from '@penn/utils';
import { DefaultTheme } from '@penn/theme';


export const Loading: FC = getLazyFC(({View}) => {
  const LoadingView = View`
    display: inline-flex;
    animation: spin 1s linear infinite;
    transform-origin: center;
    height: 100;
    width: 100%;

    svg {
      width: 100%;
      height: 100%;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return () => {
    return (
      <LoadingView>
        <FontAwesomeIcon
          color={DefaultTheme.colors.white}
          icon={faSpinner}
        />
      </LoadingView>
    );
  }
});
