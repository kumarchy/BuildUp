import prisma from "../db/db.config.js";

//create like
export const createLike = async (req, resp) => {
  const { user_id, post_id, type } = req.body; // 'type' can be 'LIKE' or 'DISLIKE'

  // Check if the user has already liked or disliked the post
  const existingLike = await prisma.like.findUnique({
    where: { post_id_user_id: { post_id, user_id } },
  });

  if (existingLike) {
    if (existingLike.type === type) {
      // If user clicks the same type (like/dislike) again, remove it
      await prisma.like.delete({
        where: { post_id_user_id: { post_id, user_id } },
      });

      // Decrease the like or dislike count
      if (type === "LIKE") {
        await prisma.post.update({
          where: { id: Number(post_id) },
          data: { like_count: { decrement: 1 } },
        });
      } else if (type === "DISLIKE") {
        await prisma.post.update({
          where: { id: Number(post_id) },
          data: { dislike_count: { decrement: 1 } },
        });
      }

      return resp.status(200).json({ message: `${type} removed`, success: true });
    } else {
      // If user switches from like to dislike or vice versa, update the type and counts
      await prisma.like.update({
        where: { post_id_user_id: { post_id, user_id } },
        data: { type },
      });

      // Adjust counts based on the new type
      if (type === "LIKE") {
        await prisma.post.update({
          where: { id: Number(post_id) },
          data: { like_count: { increment: 1 }, dislike_count: { decrement: 1 } },
        });
      } else if (type === "DISLIKE") {
        await prisma.post.update({
          where: { id: Number(post_id) },
          data: { dislike_count: { increment: 1 }, like_count: { decrement: 1 } },
        });
      }

      return resp.status(200).json({ message: `${type} updated`, success: true });
    }
  } else {
    // If no existing like/dislike, create a new one and increase the respective count
    await prisma.like.create({
      data: { post_id, user_id, type },
    });

    if (type === "LIKE") {
      await prisma.post.update({
        where: { id: Number(post_id) },
        data: { like_count: { increment: 1 } },
      });
    } else if (type === "DISLIKE") {
      await prisma.post.update({
        where: { id: Number(post_id) },
        data: { dislike_count: { increment: 1 } },
      });
    }

    return resp.status(201).json({ message: `${type} created`, success: true });
  }
};

// get like and dislike count
export const getLikeCount = async (req, resp) => {
  try {
    const { post_id } = req.params;
    if (!post_id) {
      return resp.status(400).json({ error: "post_id is required" });
    }

    const likeCount = await prisma.like.count({
      where: { post_id: Number(post_id), type: "LIKE" },
    });

    const dislikeCount = await prisma.like.count({
      where: { post_id: Number(post_id), type: "DISLIKE" },
    });

    resp
      .status(200)
      .json({ likes: likeCount, dislikes: dislikeCount, success: true });
  } catch (error) {
    console.error("Error fetching like count:", error);
    resp.status(500).json({ error: "Internal server error" });
  }
};
