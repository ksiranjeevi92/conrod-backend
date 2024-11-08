import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { IsEntity } from 'common/decorators/is-entity.decorator';
import { IdDto } from 'common/dto/id.dto';

export class CreateOrderDto {
  @IsEntity()
  customer: IdDto;

  @ArrayNotEmpty()
  @Type(() => OrderItemDto)
  @ValidateNested()
  items: OrderItemDto[];
}
