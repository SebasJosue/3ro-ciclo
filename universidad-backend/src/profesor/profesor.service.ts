import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { Prisma } from '@prisma/client'; // ✅ Importado correctamente

@Injectable()
export class ProfesorService {
  constructor(private prisma: PrismaService) {}

  // 🔁 Transacción: crear profesor + usuario
  async createWithUsuario(data: CreateProfesorDto) {
    return this.prisma.$transaction(async (tx) => {
      const profesor = await tx.profesor.create({
        data: {
          nombre: data.nombre,
          carreraId: data.carreraId,
        },
      });

      const usuario = await tx.usuario.create({
        data: {
          nombre: data.nombre,
          email: data.email,
          password: data.password,
          rolId: data.rolId,
          profesorId: profesor.id,
        },
      });

      return { profesor, usuario };
    });
  }

  // 📄 Paginación + vistas + búsqueda lógica
  async findAll(skip = 0, take = 10, search?: string) {
    const where: Prisma.ProfesorWhereInput = search
      ? {
          nombre: {
            contains: search,
            mode: 'insensitive',
          },
        }
      : {};

    const [data, total] = await this.prisma.$transaction([
      this.prisma.profesor.findMany({
        skip,
        take,
        where,
        include: { carrera: true },
      }),
      this.prisma.profesor.count({ where }),
    ]);

    return { data, total, skip, take };
  }

  // 📍 Detalle con relaciones
  findOne(id: number) {
    return this.prisma.profesor.findUnique({
      where: { id },
      include: { carrera: true, dictados: true },
    });
  }

  // ⚙️ Operación lógica: cambiar nombre o carrera
  update(id: number, data: Partial<CreateProfesorDto>) {
    return this.prisma.profesor.update({
      where: { id },
      data,
    });
  }

  // ❌ Borrar profesor (solo admin)
  remove(id: number) {
    return this.prisma.profesor.delete({ where: { id } });
  }
}
