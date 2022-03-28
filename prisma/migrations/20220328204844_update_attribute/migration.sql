-- DropForeignKey
ALTER TABLE `AttributeValue` DROP FOREIGN KEY `AttributeValue_assingedAttribute_fkey`;

-- AlterTable
ALTER TABLE `AttributeValue` MODIFY `assingedAttribute` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `AttributeValue` ADD CONSTRAINT `AttributeValue_assingedAttribute_fkey` FOREIGN KEY (`assingedAttribute`) REFERENCES `AssignedAttribute`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
