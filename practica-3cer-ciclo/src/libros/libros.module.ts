import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { librosservice } from "./libros.service";
import { librosController } from "./libros.controller";

@Module({

    imports:[PrismaClient],
    providers: [librosservice],
    controllers: [librosController],
    exports: [librosservice],
})

export class librosModule{}