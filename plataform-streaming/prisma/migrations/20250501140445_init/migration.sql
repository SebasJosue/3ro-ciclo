-- CreateEnum
CREATE TYPE "TipoContenido" AS ENUM ('PELICULA', 'SERIE');

-- CreateTable
CREATE TABLE "Contenido" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "tipo" "TipoContenido" NOT NULL,

    CONSTRAINT "Contenido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pelicula" (
    "id" INTEGER NOT NULL,
    "duracion" INTEGER NOT NULL,

    CONSTRAINT "Pelicula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Serie" (
    "id" INTEGER NOT NULL,
    "temporadas" INTEGER NOT NULL,

    CONSTRAINT "Serie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pelicula" ADD CONSTRAINT "Pelicula_id_fkey" FOREIGN KEY ("id") REFERENCES "Contenido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Serie" ADD CONSTRAINT "Serie_id_fkey" FOREIGN KEY ("id") REFERENCES "Contenido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
