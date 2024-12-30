import e from "express";
import { Router } from "express";
import { createComment, showPostComment} from "../controller/commentController.js";

const commentRouter = Router();

commentRouter.post("/",createComment);
commentRouter.get("/:post_id", showPostComment);
export default commentRouter;