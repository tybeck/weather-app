import React, { FC, useRef } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { WeatherSchema, WeatherSchemaKeys } from '@penn/schemas';
import { getLazyFC } from '@penn/utils';
import { useApp } from '@penn/context';
import { DefaultTheme } from '@penn/theme';
import { useWeather } from '@penn/hooks';

import { Input } from '../Input';
import { Button } from '../Button';

export const WeatherInput: FC = getLazyFC(({ View }) => {
  const WeatherInputView = View`
    position: relative;
  `;

  const ButtonView = View`
    position: absolute;
    right: 0;
    z-index: 1;
  `;

  return () => {
    const { geospatial, isAppLoading } = useApp();
    const { setLocation, location } = useWeather();
    const debounce = useRef<NodeJS.Timeout | null>(null);
    const {
      control,
      getValues,
      setValue,
      trigger,
    } = useForm({
      resolver: zodResolver(WeatherSchema),
      reValidateMode: 'onChange',
      mode: 'all',
      defaultValues: {
        cityOrZip: '',
      },
    });

    const update = (values: FieldValues) => {
      setLocation(values.cityOrZip)
    };

    const handleDebouncingInput = () => {
      if (debounce.current) {
        clearTimeout(debounce.current);
      }

      debounce.current = setTimeout(() => {
        try {
          const values = WeatherSchema.parse(getValues());
          update(values);
        } catch(e) {}
      }, 1000);
    };

    const handleOnChange = (onChange: (...event: any[]) => void) => {
      return (text?: string | undefined) => {
        onChange(text);
        handleDebouncingInput();
      }
    };

    const onPress = async () => {
      if (geospatial && geospatial.zipcode) {
        setValue(WeatherSchemaKeys.cityOrZip, geospatial.zipcode);
        await trigger(WeatherSchemaKeys.cityOrZip);
        handleDebouncingInput();
      }
    };

    return (
      <WeatherInputView>
        {geospatial && (
          <ButtonView>
            <Button
              disabled={isAppLoading || geospatial?.zipcode === location}
              onPress={onPress}
              text="Use My Location"
            />
          </ButtonView>
        )}
        <Controller
          name={WeatherSchemaKeys.cityOrZip}
          control={control}
          render={({field: {value, onChange}}) =>
            <Input
              value={value}
              icon={faMagnifyingGlass}
              placeholder="Enter city or zipcode"
              onChange={handleOnChange(onChange)}
              paddingRight={geospatial ? DefaultTheme.base * 36 : 0}
              noMargin
            />
          }
        />
      </WeatherInputView>
    );
  }
});
