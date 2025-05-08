import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { Prisma } from '@prisma/client';

@Controller('profesores')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Post()
  create(@Body() data: Prisma.ProfesorCreateInput) {
    return this.profesorService.create(data);
  }

  @Get()
  findAll() {
    return this.profesorService.findAll();
  }
}
