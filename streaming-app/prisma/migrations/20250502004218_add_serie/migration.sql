/*
  Warnings:

  - You are about to drop the `Serie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Serie" DROP CONSTRAINT "Serie_contenidoId_fkey";

-- DropTable
DROP TABLE "Serie";

-- CreateTable
CREATE TABLE "serie" (
    "id" SERIAL NOT NULL,
    "contenidoId" INTEGER NOT NULL,
    "temporadas" INTEGER NOT NULL,
    "creador" TEXT NOT NULL,

    CONSTRAINT "serie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "serie_contenidoId_key" ON "serie"("contenidoId");

-- AddForeignKey
ALTER TABLE "serie" ADD CONSTRAINT "serie_contenidoId_fkey" FOREIGN KEY ("contenidoId") REFERENCES "Contenido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
