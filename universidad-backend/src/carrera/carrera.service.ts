import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CarreraService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CarreraCreateInput) {
    return this.prisma.carrera.create({ data });
  }

  findAll() {
    return this.prisma.carrera.findMany();
  }

  countEstudiantes(id: number) {
    return this.prisma.estudiante.count({ where: { carreraId: id } });
  }

  countProfesores(id: number) {
    return this.prisma.profesor.count({ where: { carreraId: id } });
  }
}
