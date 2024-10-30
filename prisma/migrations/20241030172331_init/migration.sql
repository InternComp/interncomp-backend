-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "recruiterEmail" TEXT NOT NULL,
    "careerPages" TEXT NOT NULL,
    "salaryInfo" TEXT NOT NULL,
    "skillsRequired" TEXT NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
