-- CreateEnum
CREATE TYPE "limited_rating" AS ENUM ('ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "program" TEXT,
    "university" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "id" TEXT NOT NULL,
    "reviewerId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" "limited_rating" NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Salaries" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "wtNumber" INTEGER NOT NULL,
    "salaryInfo" TEXT NOT NULL,

    CONSTRAINT "Salaries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Companies" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "culture" TEXT,
    "benefits" TEXT,
    "location" TEXT NOT NULL,
    "primaryIndustry" TEXT NOT NULL,
    "companySize" TEXT NOT NULL,
    "founded" INTEGER NOT NULL,
    "recruiterEmails" TEXT[],
    "imagesAndBanners" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "careerPages" TEXT NOT NULL,
    "salaryInfo" TEXT NOT NULL,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Salaries" ADD CONSTRAINT "Salaries_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
