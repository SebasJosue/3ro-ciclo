import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContenidoService } from './contenido.service';

@Controller('contenido')
export class ContenidoController {
  constructor(private readonly contenidoService: ContenidoService) {}

  @Post()
  crear(@Body() body: any) {
    return this.contenidoService.crearContenido(body);
  }

  @Get()
  obtenerTodos() {
    return this.contenidoService.getContenido();
  }

  @Get('peliculas')
  obtenerPeliculas() {
    return this.contenidoService.getPeliculas();
  }

  @Get('series')
  obtenerSeries() {
    return this.contenidoService.getSeries();
  }
}
