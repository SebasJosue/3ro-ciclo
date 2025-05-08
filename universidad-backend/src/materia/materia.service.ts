import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MateriaService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.MateriaCreateInput) {
    return this.prisma.materia.create({ data });
  }

  findAll() {
    return this.prisma.materia.findMany();
  }

  countEstudiantes(id: number) {
    return this.prisma.inscripcion.count({ where: { materiaId: id } });
  }

  profesoresDictan(id: number) {
    return this.prisma.dicta.findMany({
      where: { materiaId: id },
      include: { profesor: true },
    });
  }
}
