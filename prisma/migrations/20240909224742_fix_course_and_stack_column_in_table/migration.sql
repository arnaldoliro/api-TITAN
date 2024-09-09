/*
  Warnings:

  - Added the required column `stack` to the `CandidateProsel` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `course` on the `CandidateProsel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `stack` to the `CandidateSimtech` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `course` on the `CandidateSimtech` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Stack" AS ENUM ('Frontend', 'Backend', 'Fullstack', 'DevOps', 'DataScience', 'Mobile', 'QA', 'UXUI', 'ProductManagement', 'Other');

-- AlterTable
ALTER TABLE "CandidateProsel" ADD COLUMN     "stack" "Stack" NOT NULL,
DROP COLUMN "course",
ADD COLUMN     "course" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CandidateSimtech" ADD COLUMN     "stack" "Stack" NOT NULL,
DROP COLUMN "course",
ADD COLUMN     "course" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Course";
