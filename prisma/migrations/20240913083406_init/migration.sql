-- CreateTable
CREATE TABLE "cours" (
    "id" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "cours_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cours_name_key" ON "cours"("name");

-- AddForeignKey
ALTER TABLE "cours" ADD CONSTRAINT "cours_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
