import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createProductDto: CreateProductDto) {
    let newUser = await this.prisma.product.create({ data: createProductDto });
    return newUser;
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    let one = await this.prisma.product.findUnique({ where: { id } });
    if (!one) {
      throw new NotFoundException('Product not found');
    }
    return await this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    let one = await this.prisma.product.findUnique({ where: { id } });
    if (!one) {
      throw new NotFoundException('Product not found');
    }
    await this.prisma.product.delete({ where: { id } });
    return one
  }
}
