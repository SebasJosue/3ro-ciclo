import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContenidoService } from './contenido.service';
import { CreateContenidoDto } from './dto/create-contenido.dto';

@Controller('contenido')
export class ContenidoController {
  constructor(private readonly contenidoService: ContenidoService) {}

  @Post()
  crearContenido(@Body() dto: CreateContenidoDto) {
    return this.contenidoService.crearContenido(dto);
  }

  @Get()
  getContenidos() {
    return this.contenidoService.getContenidos();
  }

  @Get('peliculas')
  getPeliculas() {
    return this.contenidoService.getPeliculas();
  }

  @Get('series')
  getSeries() {
    return this.contenidoService.getSeries();
  }

  // GETs individuales por tabla
  @Get('tabla/contenido')
  getContenidoTabla() {
    return this.contenidoService.getContenidoIndividual();
  }

  @Get('tabla/peliculas')
  getPeliculasTabla() {
    return this.contenidoService.getPeliculasTabla();
  }

  @Get('tabla/series')
  getSeriesTabla() {
    return this.contenidoService.getSeriesTabla();
  }
}
