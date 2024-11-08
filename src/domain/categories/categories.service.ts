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
    private readonly categoryRepository: Repository<Category>,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    const Category = this.categoryRepository.create(createCategoryDto);

    return this.categoryRepository.save(Category);
  }

  findAll(paginationDto: PaginationDto) {
    const { limit, offset } = paginationDto;

    return this.categoryRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number) {
    const Category = await this.categoryRepository.findOne({
      where: { id },
      relations: { products: true },
    });
    if (!Category) {
      throw new NotFoundException(`The Category not fount with ${id}`);
    }
    return Category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const Category = await this.categoryRepository.preload({
      id,
      ...updateCategoryDto,
    });
    if (!Category) {
      throw new NotFoundException(`The Category not fount with ${id}`);
    }
    return this.categoryRepository.save(Category);
  }

  async remove(id: number) {
    const Category = await this.categoryRepository.findOne({ where: { id } });
    return this.categoryRepository.remove(Category);
  }
}
