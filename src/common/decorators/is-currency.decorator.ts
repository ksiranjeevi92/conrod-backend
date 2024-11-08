import { applyDecorators } from '@nestjs/common';
import { IsNumber, IsPositive, ValidationOptions } from 'class-validator';
/**
 *checks if the value is a positive number greater than zero.
 */
export const IsCurrency = (
  validationPipeOptions?: ValidationOptions,
): PropertyDecorator =>
  applyDecorators(
    IsNumber({ maxDecimalPlaces: 2 }),
    IsPositive(validationPipeOptions),
  );
