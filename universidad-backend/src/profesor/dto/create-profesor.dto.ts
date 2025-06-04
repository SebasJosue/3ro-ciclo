export class CreateProfesorDto {
  nombre: string;
  email: string;
  password: string;
  carreraId: number;
  rolId: number; // Para asociar el rol al usuario (ej: rolId del Profesor)
}
