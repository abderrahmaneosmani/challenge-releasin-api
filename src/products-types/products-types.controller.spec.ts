import { Test, TestingModule } from '@nestjs/testing';
import { ProductsTypesController } from './products-types.controller';
import { ProductsTypesService } from './products-types.service';

describe('ProductsTypesController', () => {
  let controller: ProductsTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsTypesController],
      providers: [ProductsTypesService],
    }).compile();

    controller = module.get<ProductsTypesController>(ProductsTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
