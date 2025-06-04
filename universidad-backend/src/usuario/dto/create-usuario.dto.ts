import { IsEmail, IsOptional, IsString, IsNumber, ValidateIf } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  rolId: number;

  @IsOptional()
  estudianteId?: number;

  @IsOptional()
  profesorId?: number;

  // Solo requerido si rolId === 2 (estudiante)
  @ValidateIf(o => o.rolId === 2)
  @IsString()
  nombreEstudiante?: string;

  // Solo requerido si rolId === 3 (profesor)
  @ValidateIf(o => o.rolId === 3)
  @IsNumber()
  carreraId?: number;
}
