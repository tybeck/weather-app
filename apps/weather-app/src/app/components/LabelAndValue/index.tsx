import {getLazyFC} from '@penn/utils';
import {Typography} from '@penn-ui/common';
import {Colors, Sizing} from '@penn/types';
import { DefaultTheme } from '@penn/theme';

type LabelAndValueProps = {
  label: string;
  value: string | number;
}

export const LabelAndValue = getLazyFC<LabelAndValueProps>(({View}) => {
  const LabelAndValueView = View`
    margin-bottom: ${DefaultTheme.size.small}px;
    height: ${DefaultTheme.size.xxlarge}px;
    flex-direction: row;
    display: flex;
  `;

  const LabelView = View`
    font-weight: 200;
  `;

  const ValueView = View`
    margin-left: ${DefaultTheme.size.medium}px;
  `;

  return ({label, value}) => {
    return (
      <LabelAndValueView>
        <LabelView>
          <Typography
            color={Colors.GluonGrey}
            size={Sizing.Small}
            text={label}
          />
        </LabelView>
        <ValueView>
          <Typography
            color={Colors.GluonGrey}
            text={value.toString()}
            size={Sizing.Small}
            bold
          />
        </ValueView>
      </LabelAndValueView>
    )
  }
});
