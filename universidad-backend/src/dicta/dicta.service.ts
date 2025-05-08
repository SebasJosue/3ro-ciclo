import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DictaService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.DictaCreateInput) {
    return this.prisma.dicta.create({ data });
  }

  findAll() {
    return this.prisma.dicta.findMany({ include: { profesor: true, materia: true } });
  }
}
