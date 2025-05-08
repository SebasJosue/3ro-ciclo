import { Module } from '@nestjs/common';
import { DictaController } from './dicta.controller';
import { DictaService } from './dicta.service';

@Module({
  controllers: [DictaController],
  providers: [DictaService]
})
export class DictaModule {}
