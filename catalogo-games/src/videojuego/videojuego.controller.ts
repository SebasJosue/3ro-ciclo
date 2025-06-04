import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
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
  obtenerUno(@Param('id') id: string) {
    return this.videojuegoService.obtenerUno(+id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() data: any) {
    return this.videojuegoService.actualizar(+id, data);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.videojuegoService.eliminar(+id);
  }
}
