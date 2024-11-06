/*
  Warnings:

  - Added the required column `name` to the `Companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Companies" ADD COLUMN     "name" TEXT NOT NULL;
