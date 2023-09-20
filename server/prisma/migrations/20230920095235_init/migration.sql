/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `PictureOfDay` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PictureOfDay_date_key" ON "PictureOfDay"("date");
