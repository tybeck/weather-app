import { AppTheme, Colors, Sizing } from '@penn/types';

export const base = 4;

/**
 * In a perfect world - these would be supplied from design tokens coming from UX
 */
export const DefaultTheme: AppTheme = {
  base,
  colors: {
    [Colors.FirstRain]: '#BBD7EC',
    [Colors.WindBlue]: '#AEC9DF',
    [Colors.RuinedSmores]: '#0F0F11',
    [Colors.GluonGrey]: '#1B1B1D',
    [Colors.White]: '#FFF',
    [Colors.DynamicBlack]: '#1E1E1E',
    [Colors.BoltgunMetal]: '#39393A',
    [Colors.Argent]: '#898989',
    [Colors.ColdMorning]: '#E5E5E5',
  },
  size: {
    [Sizing.Xsmall]: base / 2,
    [Sizing.Small]: base,
    [Sizing.Medium]: base * 2,
    [Sizing.Large]: base * 3,
    [Sizing.Xlarge]: base * 4,
    [Sizing.XxLarge]: base * 5,
  },
  fontSize: {
    [Sizing.Xsmall]: base * 2,
    [Sizing.Small]: base * 3.5,
    [Sizing.Medium]: base * 4,
    [Sizing.Large]: base * 6,
    [Sizing.Xlarge]: base * 8,
    [Sizing.XxLarge]: base * 9,
  },
};
