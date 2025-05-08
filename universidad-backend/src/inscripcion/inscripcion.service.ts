import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class InscripcionService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.InscripcionCreateInput) {
    return this.prisma.inscripcion.create({ data });
  }

  findAll() {
    return this.prisma.inscripcion.findMany({ include: { estudiante: true, materia: true } });
  }
}
