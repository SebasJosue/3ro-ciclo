import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ContenidoModule } from './contenido/contenido.module';

@Module({
  imports: [PrismaModule, ContenidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
