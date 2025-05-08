import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { Prisma } from '@prisma/client';

@Controller('carreras')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Post()
  create(@Body() data: Prisma.CarreraCreateInput) {
    return this.carreraService.create(data);
  }

  @Get()
  findAll() {
    return this.carreraService.findAll();
  }

  @Get(':id/estudiantes/count')
  countEstudiantes(@Param('id', ParseIntPipe) id: number) {
    return this.carreraService.countEstudiantes(id);
  }

  @Get(':id/profesores/count')
  countProfesores(@Param('id', ParseIntPipe) id: number) {
    return this.carreraService.countProfesores(id);
  }
}
