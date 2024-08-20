import React, { FC, LazyExoticComponent } from 'react';

import { View } from '@penn/types';

import { getView } from './view.util';
import { getSafeAreaView } from './safe-area-view.util';

type LazyOpts = {
  View: View;
  SafeAreaView: View;
};

export const getLazyFC = <Props = {},>(
  callback: (opts: LazyOpts) => FC<Props>,
): LazyExoticComponent<FC<Props>> => {
  return React.lazy(async () => {
    const View = await getView();
    const SafeAreaView = await getSafeAreaView();

    return {
      default: callback({View, SafeAreaView}),
    };
  });
};
