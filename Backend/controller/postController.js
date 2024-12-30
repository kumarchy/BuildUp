import e from "express";
import prisma from "../db/db.config.js";

// create a post
export const createPost = async (req, resp) => {
  const { user_id, title, description } = req.body;

  if (!title || !description) {
    return resp.json({
      status: 400,
      message: "Enter the required field",
    });
  }

  const newPost = await prisma.post.create({
    data: {
      user_id:Number(user_id),
      title:title,
      description:description,
    },
  });

  return resp.json({
    status: 200,
    data: newPost,
    message: "Post created Successfully",
  });
};

// fetch all post
export const fetchAllPost = async(req, resp)=>{
  const posts = await prisma.post.findMany();
  return resp.json({status:200, data:posts}
  )
}

// show perticular post comment
export const showPost = async(req, resp)=>{
  const postId = req.params.id;
  const post = await prisma.comment.findFirst({
    where:{
      id:Number(postId),
    },
  })
  
  return resp.json({status:200, data:post});
}


// delete a post
export const deletePost = async(req, resp)=>{
  const postId = req.params.id;
  await prisma.post.delete({
    where:{
      id:Number(postId),
    }
  });

  return resp.json({status:200, message:"Post deleted Successfully"})
}
