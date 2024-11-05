import { IsOptional } from 'class-validator';
import { IsCardinal } from 'common/decorators/is-cardinal.decorator';

export class PaginationDto {
  @IsCardinal()
  @IsOptional()
  limit: number;

  @IsCardinal()
  @IsOptional()
  offset: number;
}
