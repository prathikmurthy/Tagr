/*
  Warnings:

  - You are about to drop the column `tagDown` on the `Untagged` table. All the data in the column will be lost.
  - You are about to drop the column `tagLeft` on the `Untagged` table. All the data in the column will be lost.
  - You are about to drop the column `tagRight` on the `Untagged` table. All the data in the column will be lost.
  - You are about to drop the column `tagUp` on the `Untagged` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Untagged" DROP COLUMN "tagDown";
ALTER TABLE "Untagged" DROP COLUMN "tagLeft";
ALTER TABLE "Untagged" DROP COLUMN "tagRight";
ALTER TABLE "Untagged" DROP COLUMN "tagUp";
