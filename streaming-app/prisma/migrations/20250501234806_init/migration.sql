-- CreateTable
CREATE TABLE "Contenido" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "anio" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Contenido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pelicula" (
    "id" SERIAL NOT NULL,
    "contenidoId" INTEGER NOT NULL,
    "duracion" INTEGER NOT NULL,
    "director" TEXT NOT NULL,

    CONSTRAINT "Pelicula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Serie" (
    "id" SERIAL NOT NULL,
    "contenidoId" INTEGER NOT NULL,
    "temporadas" INTEGER NOT NULL,
    "creador" TEXT NOT NULL,

    CONSTRAINT "Serie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pelicula_contenidoId_key" ON "Pelicula"("contenidoId");

-- CreateIndex
CREATE UNIQUE INDEX "Serie_contenidoId_key" ON "Serie"("contenidoId");

-- AddForeignKey
ALTER TABLE "Pelicula" ADD CONSTRAINT "Pelicula_contenidoId_fkey" FOREIGN KEY ("contenidoId") REFERENCES "Contenido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Serie" ADD CONSTRAINT "Serie_contenidoId_fkey" FOREIGN KEY ("contenidoId") REFERENCES "Contenido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
