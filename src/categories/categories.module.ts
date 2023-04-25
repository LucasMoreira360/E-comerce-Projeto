import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CategoriesController],
  providers: [PrismaService, CategoriesService],
})
export class CategoriesModule {}
