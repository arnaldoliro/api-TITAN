-- CreateEnum
CREATE TYPE "DiversityGroup" AS ENUM ('LGBTQIA', 'Black', 'Indigenous', 'Latinx', 'Asian', 'MiddleEastern', 'White', 'Other');

-- CreateEnum
CREATE TYPE "Course" AS ENUM ('Frontend', 'Backend', 'Fullstack', 'DevOps', 'DataScience', 'Mobile', 'QA', 'UXUI', 'ProductManagement', 'Other');

-- CreateEnum
CREATE TYPE "ReferalSource" AS ENUM ('Instagram', 'Facebook', 'LinkedIn', 'Twitter', 'WhatsApp', 'Email', 'Friend', 'Other');

-- CreateEnum
CREATE TYPE "TechnologyAffinity" AS ENUM ('Beginner', 'Intermediate', 'Advanced');

-- CreateTable
CREATE TABLE "CandidateProsel" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pronouns" TEXT NOT NULL,
    "diversity_group" "DiversityGroup" NOT NULL,
    "special_condition_needed" BOOLEAN NOT NULL,
    "technology_affinity" "TechnologyAffinity" NOT NULL,
    "course" "Course" NOT NULL,
    "registration_number" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "referral_source" "ReferalSource" NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "age" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "CandidateProsel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CandidateSimtech" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pronouns" TEXT NOT NULL,
    "diversity_group" "DiversityGroup" NOT NULL,
    "special_condition_needed" BOOLEAN NOT NULL,
    "technology_affinity" "TechnologyAffinity" NOT NULL,
    "course" "Course" NOT NULL,
    "registration_number" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "referral_source" "ReferalSource" NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "age" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "CandidateSimtech_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SimtechDay" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "candidateSimtechId" TEXT,

    CONSTRAINT "SimtechDay_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SimtechDay" ADD CONSTRAINT "SimtechDay_candidateSimtechId_fkey" FOREIGN KEY ("candidateSimtechId") REFERENCES "CandidateSimtech"("id") ON DELETE SET NULL ON UPDATE CASCADE;
