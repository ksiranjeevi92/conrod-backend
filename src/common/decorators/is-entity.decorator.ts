import { applyDecorators } from '@nestjs/common';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { IdDto } from 'common/dto/id.dto';
/**
 *checks if the value is a valid object.
 */
export const IsEntity = (): PropertyDecorator =>
  applyDecorators(
    Type(() => IdDto),
    ValidateNested(),
  );
