-- DropForeignKey
ALTER TABLE "CandidateProsel" DROP CONSTRAINT "CandidateProsel_courseId_fkey";

-- AlterTable
ALTER TABLE "CandidateProsel" ALTER COLUMN "courseId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CandidateProsel" ADD CONSTRAINT "CandidateProsel_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
