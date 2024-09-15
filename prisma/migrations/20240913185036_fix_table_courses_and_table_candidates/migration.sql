/*
  Warnings:

  - You are about to drop the column `other_course` on the `Courses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CandidateProsel" ADD COLUMN     "other_course" TEXT;

-- AlterTable
ALTER TABLE "CandidateSimtech" ADD COLUMN     "other_course" TEXT;

-- AlterTable
ALTER TABLE "Courses" DROP COLUMN "other_course";
