-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "dislike_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "like_count" INTEGER NOT NULL DEFAULT 0;
