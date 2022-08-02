-- CreateTable
CREATE TABLE "Untagged" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT NOT NULL,

    CONSTRAINT "Untagged_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tagged" (
    "id" SERIAL NOT NULL,
    "idnum" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "Tagged_pkey" PRIMARY KEY ("id")
);
