-- CreateTable
CREATE TABLE "book_category" (
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "book_category_pkey" PRIMARY KEY ("categoryId")
);

-- AddForeignKey
ALTER TABLE "book_category" ADD CONSTRAINT "book_category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
