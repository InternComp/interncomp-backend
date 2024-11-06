/*
  Warnings:

  - You are about to drop the column `preferQualifications` on the `Jobs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Jobs" DROP COLUMN "preferQualifications",
ADD COLUMN     "preferredQualifications" TEXT[];
