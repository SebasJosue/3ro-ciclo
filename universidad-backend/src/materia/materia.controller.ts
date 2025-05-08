import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { Prisma } from '@prisma/client';

@Controller('materias')
export class MateriaController {
  constructor(private readonly materiaService: MateriaService) {}

  @Post()
  create(@Body() data: Prisma.MateriaCreateInput) {
    return this.materiaService.create(data);
  }

  @Get()
  findAll() {
    return this.materiaService.findAll();
  }

  @Get(':id/estudiantes/count')
  countEstudiantes(@Param('id', ParseIntPipe) id: number) {
    return this.materiaService.countEstudiantes(id);
  }

  @Get(':id/profesores')
  profesoresDictan(@Param('id', ParseIntPipe) id: number) {
    return this.materiaService.profesoresDictan(id);
  }
}
