import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EstudianteService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.EstudianteCreateInput) {
    return this.prisma.estudiante.create({ data });
  }

  findAll() {
    return this.prisma.estudiante.findMany();
  }

  async obtenerDetalles(id: number) {
    return this.prisma.estudiante.findUnique({
      where: { id },
      include: {
        carrera: true,
        inscripciones: {
          include: { materia: true },
        },
      },
    });
  }
}
