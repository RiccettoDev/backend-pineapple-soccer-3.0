/*
  Warnings:

  - You are about to drop the column `matchId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_matchId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "matchId";

-- CreateTable
CREATE TABLE "MatchUser" (
    "userId" INTEGER NOT NULL,
    "matchId" INTEGER NOT NULL,

    CONSTRAINT "MatchUser_pkey" PRIMARY KEY ("userId","matchId")
);

-- AddForeignKey
ALTER TABLE "MatchUser" ADD CONSTRAINT "MatchUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatchUser" ADD CONSTRAINT "MatchUser_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
