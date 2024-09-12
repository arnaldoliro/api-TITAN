/*
  Warnings:

  - You are about to drop the column `course` on the `CandidateProsel` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "InterestBoard" AS ENUM ('Relacoes_externas', 'Comercial', 'Marketing', 'Desenvolvimento', 'Gestao_De_Pessoas', 'Financeiro');

-- AlterTable
ALTER TABLE "CandidateProsel" DROP COLUMN "course";

-- CreateTable
CREATE TABLE "Courses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "others" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CandidateProselToCourses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Courses_name_key" ON "Courses"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CandidateProselToCourses_AB_unique" ON "_CandidateProselToCourses"("A", "B");

-- CreateIndex
CREATE INDEX "_CandidateProselToCourses_B_index" ON "_CandidateProselToCourses"("B");

-- AddForeignKey
ALTER TABLE "_CandidateProselToCourses" ADD CONSTRAINT "_CandidateProselToCourses_A_fkey" FOREIGN KEY ("A") REFERENCES "CandidateProsel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CandidateProselToCourses" ADD CONSTRAINT "_CandidateProselToCourses_B_fkey" FOREIGN KEY ("B") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
