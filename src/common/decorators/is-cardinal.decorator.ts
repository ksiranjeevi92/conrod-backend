import { applyDecorators } from '@nestjs/common';
import { IsInt, IsPositive, ValidationOptions } from 'class-validator';
/**
 *checks if the value is a positive number greater than zero.
 */
export const IsCardinal = (
  validationPipeOptions?: ValidationOptions,
): PropertyDecorator =>
  applyDecorators(
    IsInt(validationPipeOptions),
    IsPositive(validationPipeOptions),
  );
