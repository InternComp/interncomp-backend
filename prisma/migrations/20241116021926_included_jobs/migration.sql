-- CreateTable
CREATE TABLE "Jobs" (
    "id" TEXT NOT NULL,
    "companyImage" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "employmentType" TEXT NOT NULL,
    "workType" TEXT NOT NULL,
    "internType" TEXT NOT NULL,
    "jobLink" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "skillsRequired" TEXT[],
    "basicQualifications" TEXT[],
    "preferredQualifications" TEXT[],
    "keyResponsibilities" TEXT[],
    "additionalInfo" TEXT NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);
