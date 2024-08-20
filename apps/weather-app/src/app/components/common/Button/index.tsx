import React from 'react';
import { css } from 'styled-components/native';

import { getLazyFC } from '@penn/utils';
import { DefaultTheme } from '@penn/theme';
import { Colors, Sizing } from '@penn/types';

import { Typography, TypographyProps } from '../Typography';

type ButtonProps = {
  text: string;
  onPress?: () => void;
  typography?: Omit<TypographyProps, 'text'>;
  disabled?: boolean;
}

export const Button = getLazyFC<ButtonProps>(({ View }) => {
  const ButtonView = View<Pick<ButtonProps, 'disabled'>>`
    background: ${DefaultTheme.colors.firstRain};
    border-radius: ${DefaultTheme.size.medium}px;
    padding: ${DefaultTheme.size.small}px;
    height: ${DefaultTheme.base * 7}px;
    width: ${DefaultTheme.base * 33}px;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    cursor: pointer;

    ${(props) => props.disabled &&
      css`
        opacity: 0.5;
        background: ${DefaultTheme.colors.coldMorning};
        color: ${DefaultTheme.colors.argent};
        cursor: default;
      `}
  `;

  return ({ onPress, disabled, text, typography }) => {
    const handleOnPress = () => {
      if (onPress && !disabled) {
        onPress();
      }
    };

    return (
      <ButtonView
        disabled={disabled}
        onClick={handleOnPress}
      >
        <Typography
          text={text}
          {...(typography ?? {
            color: Colors.GluonGrey,
            size: Sizing.Medium,
          })}
        />
      </ButtonView>
    )
  }
});
