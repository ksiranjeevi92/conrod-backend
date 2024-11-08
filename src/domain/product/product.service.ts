import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'common/dto/pagination.dto';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(createproductDto: CreateProductDto) {
    const product = this.productRepository.create(createproductDto);

    return this.productRepository.save(product);
  }

  findAll(paginationDto: PaginationDto) {
    const { limit, offset } = paginationDto;

    return this.productRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: { categories: true },
    });
    if (!product) {
      throw new NotFoundException(`The product not fount with ${id}`);
    }
    return product;
  }

  async update(id: number, updateproductDto: UpdateProductDto) {
    const product = await this.productRepository.preload({
      id,
      ...updateproductDto,
    });
    if (!product) {
      throw new NotFoundException(`The product not found with ${id}`);
    }
    return this.productRepository.save(product);
  }

  async remove(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });
    return this.productRepository.remove(product);
  }
}
