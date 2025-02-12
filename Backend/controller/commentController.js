import prisma from "../db/db.config.js";

//create comment
export const createComment = async (req, resp) => {
  const { post_id, user_id, comment } = req.body;

  try {
    await prisma.comment.create({
      data: {
        post_id: Number(post_id),
        user_id: Number(user_id),
        comment: comment,
      },
    });

    const commentCount = await prisma.post.update({
      where:{
        id:Number(post_id)
      },
      data:{
        comment_count:{
          increment:1
        }
      }
    })

    resp.json({
      status: 200,
      success: true,
      data:commentCount,
      message: "Comment created successfully",
    });
  } catch (error) {
    console.error(error);
    resp.json({
      status: 400,
      message: "An error occured while creating comment",
    });
  }
};

// showAll Comment
export const fetchAllComment = async (req, resp) => {
  const { post_id } = req.params;

  try {
  const comments = await prisma.comment.findMany({
    where:{
      post_id:Number(post_id),
    },
    orderBy:{
      created_at: "desc",
    },
    include:{
      user:true,
    }
  });

    return resp.json({ status: 200, success: true, data: comments });
  } catch (error) {
    console.error(error);
    return resp.json({
      status: 400,
      message: "An error occurred while fetching comments",
    });
  }
};
