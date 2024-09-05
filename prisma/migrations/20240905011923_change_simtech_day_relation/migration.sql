/*
  Warnings:

  - You are about to drop the column `candidateSimtechId` on the `SimtechDay` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SimtechDay" DROP CONSTRAINT "SimtechDay_candidateSimtechId_fkey";

-- AlterTable
ALTER TABLE "SimtechDay" DROP COLUMN "candidateSimtechId";

-- CreateTable
CREATE TABLE "_CandidateSimtechToSimtechDay" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CandidateSimtechToSimtechDay_AB_unique" ON "_CandidateSimtechToSimtechDay"("A", "B");

-- CreateIndex
CREATE INDEX "_CandidateSimtechToSimtechDay_B_index" ON "_CandidateSimtechToSimtechDay"("B");

-- AddForeignKey
ALTER TABLE "_CandidateSimtechToSimtechDay" ADD CONSTRAINT "_CandidateSimtechToSimtechDay_A_fkey" FOREIGN KEY ("A") REFERENCES "CandidateSimtech"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CandidateSimtechToSimtechDay" ADD CONSTRAINT "_CandidateSimtechToSimtechDay_B_fkey" FOREIGN KEY ("B") REFERENCES "SimtechDay"("id") ON DELETE CASCADE ON UPDATE CASCADE;
