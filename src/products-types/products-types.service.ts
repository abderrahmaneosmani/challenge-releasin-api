import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/dbConfig/prisma.service';
import { ProductType, Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class ProductsTypesService {
  constructor(readonly prisma: PrismaService) {}
  async create(data: Prisma.ProductTypeCreateInput): Promise<ProductType> {
    const record = await this.prisma.productType.create({
      data: data,
    });
    if (!record) {
      throw new Error('Record not found');
    }
    return record;
  }

  async findOne(id: number) {
    const productType = await this.prisma.productType.findUnique({
      where: {
        id: +id,
      },
    });
    if (!productType) {
      throw new Error('Record not found');
    }
    return productType;
  }

  async update(
    id: number,
    data: Prisma.ProductTypeUpdateInput,
  ): Promise<ProductType> {
    const record = await this.prisma.productType.update({
      where: { id: +id },
      data,
    });
    if (!record) {
      throw new Error('Record not found');
    }
    return record;
  }
}
