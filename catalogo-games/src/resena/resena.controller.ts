import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ResenaService } from './resena.service';

@Controller('resenas')
export class ResenaController {
  constructor(private readonly resenaService: ResenaService) {}

  @Post()
  crear(@Body() data: any) {
    return this.resenaService.crear(data);
  }

  @Get()
  obtenerTodos() {
    return this.resenaService.obtenerTodos();
  }

  @Get(':id')
  obtenerUno(@Param('id') id: string) {
    return this.resenaService.obtenerUno(+id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() data: any) {
    return this.resenaService.actualizar(+id, data);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.resenaService.eliminar(+id);
  }
}
