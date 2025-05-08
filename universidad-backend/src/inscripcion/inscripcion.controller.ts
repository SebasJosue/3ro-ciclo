import { Controller, Post, Get, Body } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { Prisma } from '@prisma/client';

@Controller('inscripciones')
export class InscripcionController {
  constructor(private readonly inscripcionService: InscripcionService) {}

  @Post()
  create(@Body() data: Prisma.InscripcionCreateInput) {
    return this.inscripcionService.create(data);
  }

  @Get()
  findAll() {
    return this.inscripcionService.findAll();
  }
}
