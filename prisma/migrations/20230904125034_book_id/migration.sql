/*
  Warnings:

  - The primary key for the `book_category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `bookId` to the `book_category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "book_category" DROP CONSTRAINT "book_category_pkey",
ADD COLUMN     "bookId" TEXT NOT NULL,
ADD CONSTRAINT "book_category_pkey" PRIMARY KEY ("categoryId", "bookId");

-- AddForeignKey
ALTER TABLE "book_category" ADD CONSTRAINT "book_category_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
