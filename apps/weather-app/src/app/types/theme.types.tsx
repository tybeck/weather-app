export enum Colors {
  FirstRain = 'firstRain',
  WindBlue = 'windBlue',
  RuinedSmores = 'ruinedSmores',
  GluonGrey = 'gluonGrey',
  White = 'white',
  DynamicBlack = 'dynamicBlack',
  BoltgunMetal = 'boltgunMetal',
  ColdMorning = 'coldMorning',
  Argent = 'argent',
}

export enum Sizing {
  Xsmall = 'xsmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Xlarge = 'xlarge',
  XxLarge = 'xxlarge',
}

export enum Font {
  Nunito = 'Nunito',
}

export type AppTheme = {
  /**
   * @property base
   * Base size of 4, all sizing is based on this factor
   */
  base: number;
  colors: Record<Colors, string>;
  fontSize: Record<Sizing, number>;
  size: Record<Sizing, number>;
}
