import {
  Controller, Get, Post, Body, Param, Query, Delete, Patch, UseGuards
} from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('profesores')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Post()
  @Roles('Administrador')
  create(@Body() dto: CreateProfesorDto) {
    return this.profesorService.createWithUsuario(dto);
  }

  @Get()
  @Roles('Administrador')
  findAll(
    @Query('skip') skip = '0',
    @Query('take') take = '10',
    @Query('search') search?: string,
  ) {
    return this.profesorService.findAll(Number(skip), Number(take), search);
  }

  @Get(':id')
  @Roles('Administrador')
  findOne(@Param('id') id: string) {
    return this.profesorService.findOne(+id);
  }

  @Patch(':id')
  @Roles('Administrador')
  update(@Param('id') id: string, @Body() dto: Partial<CreateProfesorDto>) {
    return this.profesorService.update(+id, dto);
  }

  @Delete(':id')
  @Roles('Administrador')
  remove(@Param('id') id: string) {
    return this.profesorService.remove(+id);
  }
}
