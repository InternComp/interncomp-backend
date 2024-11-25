/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Reviews` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Reviews` table. All the data in the column will be lost.
  - You are about to drop the column `anonymousUsername` on the `User` table. All the data in the column will be lost.
  - Changed the type of `rating` on the `Reviews` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_reviewerId_fkey";

-- AlterTable
ALTER TABLE "Reviews" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "rating",
ADD COLUMN     "rating" "limited_rating" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "anonymousUsername";
