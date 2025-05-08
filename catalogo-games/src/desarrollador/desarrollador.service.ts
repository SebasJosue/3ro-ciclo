import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DesarrolladorService {
  constructor(private prisma: PrismaService) {}

  crear(data: Prisma.DesarrolladorCreateInput) {
    return this.prisma.desarrollador.create({ data });
  }

  obtenerTodos() {
    return this.prisma.desarrollador.findMany({
      include: { videojuegos: true },
    });
  }

  obtenerUno(id: number) {
    return this.prisma.desarrollador.findUnique({
      where: { id },
      include: { videojuegos: true },
    });
  }

  actualizar(id: number, data: Prisma.DesarrolladorUpdateInput) {
    return this.prisma.desarrollador.update({
      where: { id },
      data,
    });
  }

  eliminar(id: number) {
    return this.prisma.desarrollador.delete({
      where: { id },
    });
  }
}
