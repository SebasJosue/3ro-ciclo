/*
  Warnings:

  - Added the required column `desarrolladorId` to the `Videojuego` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Videojuego" ADD COLUMN     "desarrolladorId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Desarrollador" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Desarrollador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resena" (
    "id" SERIAL NOT NULL,
    "contenido" TEXT NOT NULL,
    "puntuacion" INTEGER NOT NULL,
    "videojuegoId" INTEGER NOT NULL,

    CONSTRAINT "Resena_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Videojuego" ADD CONSTRAINT "Videojuego_desarrolladorId_fkey" FOREIGN KEY ("desarrolladorId") REFERENCES "Desarrollador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resena" ADD CONSTRAINT "Resena_videojuegoId_fkey" FOREIGN KEY ("videojuegoId") REFERENCES "Videojuego"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
