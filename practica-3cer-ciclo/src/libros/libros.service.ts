import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
@Injectable()
export class librosservice {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async getlibros(){
        return this.prisma.libros.findMany();

    }

    async postlibros (data){
        return this.prisma.libros.create(data)
    }

    async postdeprueba(data){
        return this.prisma.libros.create(data)
    }
}