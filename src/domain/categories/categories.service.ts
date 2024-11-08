import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-Category.dto';
import { UpdateCategoryDto } from './dto/update-Category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/Category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'common/dto/pagination.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly CategoryRepository: Repository<Category>,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    const Category = this.CategoryRepository.create(createCategoryDto);

    return this.CategoryRepository.save(Category);
  }

  findAll(paginationDto: PaginationDto) {
    const { limit, offset } = paginationDto;

    return this.CategoryRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number) {
    const Category = await this.CategoryRepository.findOne({
      where: { id },
      relations: { products: true },
    });
    if (!Category) {
      throw new NotFoundException(`The Category not fount with ${id}`);
    }
    return Category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const Category = await this.CategoryRepository.preload({
      id,
      ...updateCategoryDto,
    });
    if (!Category) {
      throw new NotFoundException(`The Category not fount with ${id}`);
    }
    return this.CategoryRepository.save(Category);
  }

  async remove(id: number) {
    const Category = await this.CategoryRepository.findOne({ where: { id } });
    return this.CategoryRepository.remove(Category);
  }
}
