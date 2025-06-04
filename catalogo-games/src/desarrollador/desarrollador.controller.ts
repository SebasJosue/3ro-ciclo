import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DesarrolladorService } from './desarrollador.service';

@Controller('desarrolladores')
export class DesarrolladorController {
  constructor(private readonly desarrolladorService: DesarrolladorService) {}

  @Post()
  crear(@Body() data: any) {
    return this.desarrolladorService.crear(data);
  }

  @Get()
  obtenerTodos() {
    return this.desarrolladorService.obtenerTodos();
  }

  @Get(':id')
  obtenerUno(@Param('id') id: string) {
    return this.desarrolladorService.obtenerUno(+id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() data: any) {
    return this.desarrolladorService.actualizar(+id, data);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.desarrolladorService.eliminar(+id);
  }
}
