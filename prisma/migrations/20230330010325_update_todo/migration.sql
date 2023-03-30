/*
  Warnings:

  - You are about to drop the column `isComplete` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `date` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "isComplete",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL DEFAULT false;
