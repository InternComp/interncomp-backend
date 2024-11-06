/*
  Warnings:

  - You are about to drop the column `careerPages` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `recruiterEmail` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `salaryInfo` on the `Job` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "careerPages",
DROP COLUMN "recruiterEmail",
DROP COLUMN "salaryInfo";
