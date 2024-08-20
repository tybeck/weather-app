import React, { FC } from 'react';
import { RuleSet } from 'styled-components';
import { ViewProps } from 'react-native';

export type View = <T extends Record<string, any>>(
  strings: TemplateStringsArray,
  ...args: (RuleSet<object> | string | boolean | number | ((props: T) => any))[]
) => FC<
  T &
  ViewProps &
  Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'ref'
  >
>;
