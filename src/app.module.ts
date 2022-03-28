import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './dbConfig/prisma.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [PrismaService, ProductsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
