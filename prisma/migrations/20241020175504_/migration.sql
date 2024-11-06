/*
  Warnings:

  - You are about to drop the column `imagesAndBanners` on the `Companies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Companies" DROP COLUMN "imagesAndBanners",
ADD COLUMN     "banner" TEXT,
ADD COLUMN     "image" TEXT;
