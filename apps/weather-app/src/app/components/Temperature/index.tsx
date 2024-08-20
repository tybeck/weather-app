import { getLazyFC } from '@penn/utils';
import { Typography, TypographyProps } from '@penn-ui/common';
import { Colors, Sizing } from '@penn/types';

type TemperatureProps = {
  value: number;
  typographyProps?: TypographyProps
}

export const Temperature = getLazyFC<TemperatureProps>(({View}) => {
  const TemperatureView = View`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  return ({ value, typographyProps }) => {
    return (
      <TemperatureView>
        <Typography
          text={`${value}°`}
          size={Sizing.Large}
          color={Colors.GluonGrey}
          {...typographyProps ?? {}}
        />
      </TemperatureView>
    )
  }
});
