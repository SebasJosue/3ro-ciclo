import { Get, Controller, Post } from "@nestjs/common";
import { librosservice } from "./libros.service";


@Controller('libros')
export class librosController{
 constructor(private librosservice: librosservice){}

 @Get('Todoslibros')
 async getlibros(){
    return this.librosservice.getlibros();
 }

 @Post('postlibros')
 async poslibros(data){
    return this.librosservice.postlibros(data)
 }

 @Post('postdeprueba')
 async postdeprueba(data){
    return this.librosservice.postdeprueba(data)
 }
}