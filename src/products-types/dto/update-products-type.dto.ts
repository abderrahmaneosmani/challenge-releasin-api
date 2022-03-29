import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsTypeDto } from './create-products-type.dto';

export class UpdateProductsTypeDto extends PartialType(CreateProductsTypeDto) {}
