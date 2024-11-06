/*
  Warnings:

  - The `skillsRequired` column on the `Jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `additionalInfo` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyImage` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employmentType` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `internType` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobLink` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workType` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "additionalInfo" TEXT NOT NULL,
ADD COLUMN     "basicQualifications" TEXT[],
ADD COLUMN     "companyImage" TEXT NOT NULL,
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "employmentType" TEXT NOT NULL,
ADD COLUMN     "internType" TEXT NOT NULL,
ADD COLUMN     "jobLink" TEXT NOT NULL,
ADD COLUMN     "keyResponsibilities" TEXT[],
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "preferQualifications" TEXT[],
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "workType" TEXT NOT NULL,
DROP COLUMN "skillsRequired",
ADD COLUMN     "skillsRequired" TEXT[];
