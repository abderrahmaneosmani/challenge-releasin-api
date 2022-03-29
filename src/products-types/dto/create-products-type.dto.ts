import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductsTypeDto {
  @IsNotEmpty()
  @IsString()
  Name: string;
  Created_at?: string;
  Updated_at?: string;
}
