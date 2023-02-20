import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @UseGuards(AuthGuard())
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard())
  async createProducts(
    @Body()
    product: CreateProductDto,
  ): Promise<Product> {
    return this.productService.create(product);
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  async getProduct(
    @Param('id')
    id: string,
  ): Promise<Product> {
    return this.productService.findById(id);
  }
}
