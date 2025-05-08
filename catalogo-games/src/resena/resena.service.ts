import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ResenaService {
  constructor(private prisma: PrismaService) {}

  crear(data: Prisma.ResenaCreateInput) {
    return this.prisma.resena.create({ data });
  }

  obtenerTodos() {
    return this.prisma.resena.findMany({
      include: { videojuego: true },
    });
  }

  obtenerUno(id: number) {
    return this.prisma.resena.findUnique({
      where: { id },
      include: { videojuego: true },
    });
  }

  actualizar(id: number, data: Prisma.ResenaUpdateInput) {
    return this.prisma.resena.update({
      where: { id },
      data,
    });
  }

  eliminar(id: number) {
    return this.prisma.resena.delete({
      where: { id },
    });
  }
}
