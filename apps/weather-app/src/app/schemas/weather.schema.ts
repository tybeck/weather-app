import z from 'zod';

export const WeatherSchema = z
  .object({
    cityOrZip: z.string().min(1),
  })
  .required();

export const {enum: WeatherSchemaKeys} = WeatherSchema.keyof();
