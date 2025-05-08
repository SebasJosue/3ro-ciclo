import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { TipoContenido } from '@prisma/client';

export class CreateContenidoDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsEnum(TipoContenido)
  tipo: TipoContenido;

  // Solo si es película
  @IsOptional()
  @IsNumber()
  duracion?: number;

  // Solo si es serie
  @IsOptional()
  @IsNumber()
  temporadas?: number;
}
