import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllBooks(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard())
  async createBook(
    @Body()
    product: CreateProductDto,
  ): Promise<Product> {
    return this.productService.create(product);
  }
}
