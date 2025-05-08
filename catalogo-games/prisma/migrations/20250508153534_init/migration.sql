-- CreateTable
CREATE TABLE "Videojuego" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "plataforma" TEXT NOT NULL,
    "fechaLanzamiento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Videojuego_pkey" PRIMARY KEY ("id")
);
