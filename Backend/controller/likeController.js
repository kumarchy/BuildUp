import prisma from "../db/db.config.js";

//create like
export const createLike = async(req, resp)=>{
  try{
    const {post_id, user_id, type} = req.body;

    const existingLike = await prisma.like.findUnique({
      where:{post_id_user_id:{post_id, user_id}},
    })

    if(existingLike){
      if(existingLike.type === type){
        await prisma.like.delete({
          where:{post_id_user_id:{post_id, user_id}},
        });
      }else {
        const updateLike = await prisma.like.update({
          where:{post_id_user_id:{post_id, user_id}},
          data:{type},
        });
      }
    }

    const newLike = await prisma.like.create({
      data:{post_id, user_id, type},
    });
    resp.status(201).json({data:newLike, success:true});
  }catch (error) {
    console.error("Error creating/updating like:", error);
    resp.status(500).json({ error: "Internal server error" });
  }
} 

// get like and dislike count
export const getLikeCount = async(req, resp)=>{
  try{
    const {post_id} = req.params;
    if (!post_id) {
      return resp.status(400).json({ error: "post_id is required" });
    }
    
    const likeCount = await prisma.like.count({
      where:{post_id:Number(post_id), type:"LIKE"}
    });

    const dislikeCount = await prisma.like.count({
      where:{post_id:Number(post_id), type:"DISLIKE"}
    });

    resp.status(200).json({ likes: likeCount, dislikes: dislikeCount ,success:true});
  } catch (error) {
    console.error("Error fetching like count:", error);
    resp.status(500).json({ error: "Internal server error" });
  }
}