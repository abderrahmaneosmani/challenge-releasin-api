import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ProductsTypesService } from './products-types.service';
import { CreateProductsTypeDto } from './dto/create-products-type.dto';
import { UpdateProductsTypeDto } from './dto/update-products-type.dto';

@Controller({
  path: 'products-types',
  version: '1',
})
export class ProductsTypesController {
  constructor(private readonly productsTypesService: ProductsTypesService) {}

  @Post()
  create(@Body() createProductsTypeDto: CreateProductsTypeDto) {
    return this.productsTypesService.create(createProductsTypeDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductsTypeDto: UpdateProductsTypeDto,
  ) {
    return this.productsTypesService.update(+id, updateProductsTypeDto);
  }
}
