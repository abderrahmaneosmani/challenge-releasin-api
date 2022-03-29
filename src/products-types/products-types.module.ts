import { Module } from '@nestjs/common';
import { ProductsTypesService } from './products-types.service';
import { ProductsTypesController } from './products-types.controller';
import { PrismaService } from 'src/dbConfig/prisma.service';

@Module({
  imports: [PrismaService],
  controllers: [ProductsTypesController],
  providers: [ProductsTypesService, PrismaService],
})
export class ProductsTypesModule {}
