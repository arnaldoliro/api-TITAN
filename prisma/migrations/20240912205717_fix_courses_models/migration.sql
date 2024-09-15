/*
  Warnings:

  - You are about to drop the column `course` on the `CandidateSimtech` table. All the data in the column will be lost.
  - The primary key for the `Courses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description` on the `Courses` table. All the data in the column will be lost.
  - The `id` column on the `Courses` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `_CandidateProselToCourses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `courseId` to the `CandidateProsel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `CandidateSimtech` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CandidateProselToCourses" DROP CONSTRAINT "_CandidateProselToCourses_A_fkey";

-- DropForeignKey
ALTER TABLE "_CandidateProselToCourses" DROP CONSTRAINT "_CandidateProselToCourses_B_fkey";

-- AlterTable
ALTER TABLE "CandidateProsel" ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CandidateSimtech" DROP COLUMN "course",
ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Courses" DROP CONSTRAINT "Courses_pkey",
DROP COLUMN "description",
ADD COLUMN     "other_course" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Courses_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "_CandidateProselToCourses";

-- AddForeignKey
ALTER TABLE "CandidateProsel" ADD CONSTRAINT "CandidateProsel_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateSimtech" ADD CONSTRAINT "CandidateSimtech_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
