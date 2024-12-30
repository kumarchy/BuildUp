import { Router } from "express";
import { createPost, fetchAllPost, deletePost} from "../controller/postController.js";

const postRouter = Router();

postRouter.post("/",createPost);
postRouter.get("/",fetchAllPost);
postRouter.delete("/:id",deletePost);
export default postRouter;