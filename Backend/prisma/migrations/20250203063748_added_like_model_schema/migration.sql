/*
  Warnings:

  - Added the required column `deployedLink` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `githubLink` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `techStack` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LikeType" AS ENUM ('LIKE', 'DISLIKE');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "deployedLink" TEXT NOT NULL,
ADD COLUMN     "githubLink" TEXT NOT NULL,
ADD COLUMN     "techStack" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "post_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" "LikeType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Like_post_id_user_id_key" ON "Like"("post_id", "user_id");

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
