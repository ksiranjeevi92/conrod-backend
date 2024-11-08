import {
  ArrayNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  Length,
} from 'class-validator';
import { IsCardinal } from 'common/decorators/is-cardinal.decorator';
import { IsCurrency } from 'common/decorators/is-currency.decorator';
import { IsEntity } from 'common/decorators/is-entity.decorator';
import { IdDto } from 'common/dto/id.dto';

export class CreateProductDto {
  @Length(2, 55)
  readonly name: string;

  @IsCurrency()
  readonly price: number;

  @IsOptional()
  @Length(1, 250)
  readonly descriptions: string;

  @ArrayNotEmpty()
  @IsEntity()
  readonly categories: IdDto[];
}
