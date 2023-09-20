-- CreateTable
CREATE TABLE "PictureOfDay" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "hdUrl" TEXT NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "PictureOfDay_pkey" PRIMARY KEY ("id")
);
