import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { Prisma } from '@prisma/client';

@Controller('estudiantes')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  create(@Body() data: Prisma.EstudianteCreateInput) {
    return this.estudianteService.create(data);
  }

  @Get()
  findAll() {
    return this.estudianteService.findAll();
  }

  @Get(':id/detalles')
  obtenerDetalles(@Param('id', ParseIntPipe) id: number) {
    return this.estudianteService.obtenerDetalles(id);
  }
}
