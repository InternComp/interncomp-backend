/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Jobs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Jobs" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "Reviews" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
