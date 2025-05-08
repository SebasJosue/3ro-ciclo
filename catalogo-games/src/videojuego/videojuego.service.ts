import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class VideojuegoService {
  constructor(private prisma: PrismaService) {}

  crear(data: Prisma.VideojuegoCreateInput) {
    return this.prisma.videojuego.create({ data });
  }

  obtenerTodos() {
    return this.prisma.videojuego.findMany({
      include: { desarrollador: true, resenas: true },
    });
  }

  obtenerUno(id: number) {
    return this.prisma.videojuego.findUnique({
      where: { id },
      include: { desarrollador: true, resenas: true },
    });
  }

  actualizar(id: number, data: Prisma.VideojuegoUpdateInput) {
    return this.prisma.videojuego.update({
      where: { id },
      data,
    });
  }

  eliminar(id: number) {
    return this.prisma.videojuego.delete({
      where: { id },
    });
  }
}
