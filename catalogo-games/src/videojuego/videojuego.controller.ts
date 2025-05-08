import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { VideojuegoService } from './videojuego.service';

@Controller('videojuegos')
export class VideojuegoController {
  constructor(private readonly videojuegoService: VideojuegoService) {}

  @Post()
  crear(@Body() data: any) {
    return this.videojuegoService.crear(data);
  }

  @Get()
  obtenerTodos() {
    return this.videojuegoService.obtenerTodos();
  }

  @Get(':id')
  obtenerUno(@Param('id', ParseIntPipe) id: number) {
    return this.videojuegoService.obtenerUno(id);
  }

  @Put(':id')
  actualizar(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.videojuegoService.actualizar(id, data);
  }

  @Delete(':id')
  eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.videojuegoService.eliminar(id);
  }
}
