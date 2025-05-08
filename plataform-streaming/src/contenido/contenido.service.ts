import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContenidoDto } from './dto/create-contenido.dto';
import { TipoContenido } from '@prisma/client';

@Injectable()
export class ContenidoService {
  constructor(private prisma: PrismaService) {}

  async crearContenido(dto: CreateContenidoDto) {
    const contenido = await this.prisma.contenido.create({
      data: {
        titulo: dto.titulo,
        descripcion: dto.descripcion,
        tipo: dto.tipo,
      },
    });

    if (dto.tipo === TipoContenido.PELICULA && dto.duracion !== undefined) {
      await this.prisma.pelicula.create({
        data: {
          id: contenido.id,
          duracion: dto.duracion,
        },
      });
    }

    if (dto.tipo === TipoContenido.SERIE && dto.temporadas !== undefined) {
      await this.prisma.serie.create({
        data: {
          id: contenido.id,
          temporadas: dto.temporadas,
        },
      });
    }

    return contenido;
  }

  async getPeliculas() {
    return this.prisma.pelicula.findMany({
      include: { contenido: true },
    });
  }

  async getSeries() {
    return this.prisma.serie.findMany({
      include: { contenido: true },
    });
  }

  async getContenidos() {
    return this.prisma.contenido.findMany();
  }

  async getContenidoIndividual() {
    return this.prisma.contenido.findMany();
  }

  async getPeliculasTabla() {
    return this.prisma.pelicula.findMany();
  }

  async getSeriesTabla() {
    return this.prisma.serie.findMany();
  }
}
