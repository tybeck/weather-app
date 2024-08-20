import React, { FC, ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import { css } from 'styled-components';

import { Colors, Sizing, Font } from '@penn/types';
import { DefaultTheme } from '@penn/theme';

export interface TypographyProps {
  font?: Font;
  size?: Sizing;
  color?: Colors;
  lineHeight?: Sizing;
  style?: StyleProp<TextStyle>;
  text?: string | number;
  center?: boolean;
  textCenter?: boolean;
  children?: string | ReactNode;
  uppercase?: boolean;
  capitalize?: boolean;
  italic?: boolean;
  fullWidth?: boolean;
  underline?: boolean;
  bold?: boolean;
}

const TypographyText = styled.Text<TypographyProps>`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};

  ${({fullWidth}) =>
    fullWidth &&
      css`
        width: 100%;
      `}

  ${({center}) =>
    center &&
      css`
        align-self: center;
      `};

  ${({textCenter}) =>
    textCenter &&
      css`
        text-align: center;
        width: 100%;
      `}

  ${({uppercase}) =>
    uppercase &&
      css`
        text-transform: uppercase;
      `}

  ${({capitalize}) =>
    capitalize &&
      css`
        text-transform: capitalize;
      `}

  ${({italic}) =>
    italic &&
      css`
        font-style: italic;
      `}

  ${({bold}) =>
    bold &&
      css`
        font-weight: bold;
      `}

  ${({underline}) =>
    underline &&
      css`
        text-decoration: underline;
        text-decoration-color: rgba(0, 0, 0, .35);
        text-decoration-thickness: .5px;
        text-underline-offset: 5px;
      `}
`;

export const Typography: FC<TypographyProps> = ({children, text, style, ...props}) => {
  const typographyProps = {
    size: `${
      DefaultTheme.fontSize[props.size as Sizing] ||
      DefaultTheme.fontSize[Sizing.Medium]
    }px` as Sizing,
    font: props.font || Font.Nunito,
    color: (DefaultTheme.colors[props.color as Colors] || DefaultTheme.colors[Colors.White]) as Colors,
    center: props.center || false,
    textCenter: props.textCenter || false,
    capitalize: props.capitalize || false,
    uppercase: props.uppercase || false,
    italic: props.italic || false,
    fullWidth: props.fullWidth || false,
    underline: props.underline || false,
    bold: props.bold || false,
  };
  return (
    <TypographyText {...typographyProps} style={style}>
      {children || (text ?? '').toString()}
    </TypographyText>
  );
};
