import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContenidoModule } from './contenido/contenido.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ContenidoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
