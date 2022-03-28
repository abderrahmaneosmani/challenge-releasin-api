/*
  Warnings:

  - You are about to drop the column `assingedAttribute` on the `AttributeValue` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `AttributeValue` DROP FOREIGN KEY `AttributeValue_assingedAttribute_fkey`;

-- DropForeignKey
ALTER TABLE `AttributeValue` DROP FOREIGN KEY `AttributeValue_id_fkey`;

-- AlterTable
ALTER TABLE `AttributeValue` DROP COLUMN `assingedAttribute`;
