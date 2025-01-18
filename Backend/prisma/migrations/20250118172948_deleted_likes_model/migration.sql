/*
  Warnings:

  - You are about to drop the column `comment_count` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `like_count` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_post_id_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_user_id_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "comment_count",
DROP COLUMN "like_count";

-- DropTable
DROP TABLE "Like";
