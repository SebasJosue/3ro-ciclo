import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  // 🔁 Transacción opcional para crear usuario (y opcionalmente estudiante o profesor si quieres)
  async create(data: CreateUsuarioDto) {
    // Aquí puedes extender para crear estudiante/profesor si quieres (transacción)
    return this.prisma.usuario.create({ data });
  }

  // 📄 Paginación + búsqueda lógica por nombre o email + incluir relaciones
  async findAll(skip = 0, take = 10, search?: string) {
    const where: Prisma.UsuarioWhereInput = search
      ? {
          OR: [
            { nombre: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};

    const [data, total] = await this.prisma.$transaction([
      this.prisma.usuario.findMany({
        skip,
        take,
        where,
        include: { rol: true, profesor: true, estudiante: true },
      }),
      this.prisma.usuario.count({ where }),
    ]);

    return { data, total, skip, take };
  }

  // 📍 Obtener usuario por id con relaciones
  async findOne(id: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
      include: { rol: true, profesor: true, estudiante: true },
    });

    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    return usuario;
  }

  // ⚙️ Operación lógica toggle activo/inactivo
  async toggleActivo(id: number) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    return this.prisma.usuario.update({
      where: { id },
      data: { activo: !usuario.activo },
    });
  }

  // 📝 Actualizar usuario (puedes ajustar datos a actualizar según tu DTO)
  async update(id: number, data: Partial<CreateUsuarioDto>) {
    // Puedes validar si quieres bloquear ciertos campos
    return this.prisma.usuario.update({
      where: { id },
      data,
    });
  }

  // ❌ Eliminar usuario
  async remove(id: number) {
    return this.prisma.usuario.delete({ where: { id } });
  }
}
