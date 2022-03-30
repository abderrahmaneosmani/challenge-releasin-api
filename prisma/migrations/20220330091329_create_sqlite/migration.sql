-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productType" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ProductType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Attribute" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "AttributeValue" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "AttributeValue" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Boolean" BOOLEAN NOT NULL,
    "Date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "AssignedAttribute" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "AttributeValue" INTEGER NOT NULL
);