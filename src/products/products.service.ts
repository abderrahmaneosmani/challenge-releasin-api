import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/dbConfig/prisma.service';
import { Product, Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    const record = await this.prisma.product.create({ data });
    if (!record) {
      throw new Error('Record not found');
    }
    return record;
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: +id,
      },
    });
    if (!product) {
      throw new Error('Record not found');
    }
    return product;
  }

  async update(id: number, data: Prisma.ProductUpdateInput): Promise<Product> {
    const record = await this.prisma.product.update({
      where: { id: +id },
      data,
    });
    if (!record) {
      throw new Error('Record not found');
    }
    return record;
  }
  async findAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    if (!products) {
      throw new Error('Record not found');
    }
    return products;
  }
}
