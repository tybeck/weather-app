import { Platform } from 'react-native';

import { OS, View } from '@penn/types';

export const getSafeAreaView = async (): Promise<View> => {
  if (Platform.OS === OS.web) {
    const {default: styled} = await import('styled-components');
    return styled.div as View;
  }
  const {default: styled} = await import('styled-components/native');
  return styled.SafeAreaView as View;
};
