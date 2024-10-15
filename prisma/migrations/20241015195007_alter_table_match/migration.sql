/*
  Warnings:

  - You are about to drop the column `matcheId` on the `teams` table. All the data in the column will be lost.
  - You are about to drop the column `matcheId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "teams" DROP CONSTRAINT "teams_matcheId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_matcheId_fkey";

-- AlterTable
ALTER TABLE "teams" DROP COLUMN "matcheId",
ADD COLUMN     "matchId" INTEGER;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "matcheId",
ADD COLUMN     "matchId" INTEGER;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teams" ADD CONSTRAINT "teams_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE SET NULL ON UPDATE CASCADE;
