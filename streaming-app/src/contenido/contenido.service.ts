import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContenidoService {
  constructor(private prisma: PrismaService) {}

  async crearContenido(data: any) {
    const { titulo, descripcion, anio, tipo, duracion, director, temporadas, creador } = data;

    const contenido = await this.prisma.contenido.create({
      data: {
        titulo,
        descripcion,
        anio,
        tipo,
      },
    });

    if (tipo === 'pelicula') {
      await this.prisma.pelicula.create({
        data: {
          contenidoId: contenido.id,
          duracion,
          director,
        },
      });
    } else if (tipo === 'serie') {
      await this.prisma.serie.create({
        data: {
          contenidoId: contenido.id,
          temporadas,
          creador,
        },
      });
    }

    return contenido;
  }

  getContenido() {
    return this.prisma.contenido.findMany();
  }

  getPeliculas() {
    return this.prisma.pelicula.findMany({
      include: { contenido: true },
    });
  }

  getSeries() {
    return this.prisma.serie.findMany({
      include: { contenido: true },
    });
  }
}
