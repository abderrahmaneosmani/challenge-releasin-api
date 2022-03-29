import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly Name: string;
  @IsNotEmpty()
  @IsNumber()
  readonly productType: number;
  readonly Created_at?: Date;
}
