import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProfesorService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ProfesorCreateInput) {
    return this.prisma.profesor.create({ data });
  }

  findAll() {
    return this.prisma.profesor.findMany();
  }
}
