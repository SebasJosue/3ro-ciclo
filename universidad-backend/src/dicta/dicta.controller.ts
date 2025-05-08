import { Controller, Post, Get, Body } from '@nestjs/common';
import { DictaService } from './dicta.service';
import { Prisma } from '@prisma/client';

@Controller('dicta')
export class DictaController {
  constructor(private readonly dictaService: DictaService) {}

  @Post()
  create(@Body() data: Prisma.DictaCreateInput) {
    return this.dictaService.create(data);
  }

  @Get()
  findAll() {
    return this.dictaService.findAll();
  }
}
