/*
  Warnings:

  - You are about to drop the column `anonymousUsername` on the `Reviews` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `rating` on the `Reviews` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Reviews" DROP COLUMN "anonymousUsername",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
