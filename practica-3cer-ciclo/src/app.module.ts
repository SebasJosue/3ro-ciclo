import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { librosModule } from './libros/libros.module';


@Module({
  imports: [UsuariosModule,librosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
