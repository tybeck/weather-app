/**
 * Disable warnings coming from react-native / react-native-web as they're not pertinent
 */

import { LogBox } from 'react-native';

const ignoredLogs: string[] = [
  'StyledComponents',
];
const warn = console.warn;

LogBox.ignoreLogs(ignoredLogs);

console.warn = (...msg: string[]) => {
  for (const message of msg) {
    if (ignoredLogs.some(ignoredLog => message.includes(ignoredLog))) {
      return;
    }
  }
  warn.apply(undefined, msg);
};
