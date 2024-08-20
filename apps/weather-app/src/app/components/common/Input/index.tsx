import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import styled, { css } from 'styled-components/native';

import { Colors, Font } from '@penn/types';
import { DefaultTheme } from '@penn/theme';
import { getLazyFC } from '@penn/utils';

type InputProps = {
  value?: string;
  icon?: IconDefinition;
  placeholder?: string;
  onChange?: (text?: string) => void;
  noMargin?: boolean | undefined;
  paddingRight?: number;
  textCenter?: boolean;
  color?: Colors;
};

export const Input: FC<InputProps> = getLazyFC(({View}) => {
  const IconWrapperView = View`
    position: absolute;
    margin-top: ${DefaultTheme.base}px;
    margin-left: ${DefaultTheme.base}px;
  `;

  const UIInput = styled.TextInput<Pick<InputProps, 'color' | 'textCenter'> & {hasIcon?: boolean, paddingRight?: number}>`
    width: 100%;
    height: 100%;
    font-family: ${Font.Nunito};
    color: ${(props) => DefaultTheme.colors[props.color || Colors.White]};
    padding-right: ${(props) => props.paddingRight ?? 0}px;
    letter-spacing: 1px;

    ${(props) => props.textCenter &&
      css`
        text-align: center;
      `}

    ${(props) => props.hasIcon &&
      css`
        padding-left: ${DefaultTheme.size.xxlarge + (DefaultTheme.base * 2)}px;
      `}
  `;

  const InputView = View<{$noMargin?: boolean | undefined}>`
    display: flex;
    margin-bottom: 8px;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    ${(props) =>
      props.$noMargin &&
      css`
        margin-bottom: 0;
      `}

    input {
      outline: none;
    }
  `;

  const InputViewWrapper = View`
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    padding: 4px 4px;
    background: ${DefaultTheme.colors.dynamicBlack};
    border-radius: ${DefaultTheme.size.large}px;
    position: relative;
    min-width: 350px;
    height: 28px;
  `;

  return ({
    value,
    noMargin,
    placeholder,
    textCenter,
    color,
    icon,
    onChange,
    paddingRight,
  }) => {
    return (
      <InputView $noMargin={noMargin}>
        <InputViewWrapper>
          {icon && (
            <IconWrapperView>
              <FontAwesomeIcon
                icon={icon}
                color={DefaultTheme.colors.white}
              />
            </IconWrapperView>
          )}
          <UIInput
            value={value}
            hasIcon={icon !== undefined}
            paddingRight={paddingRight}
            placeholder={placeholder}
            onChangeText={onChange}
            textCenter={textCenter}
            color={color}
          />
        </InputViewWrapper>
      </InputView>
    );
  }
});
