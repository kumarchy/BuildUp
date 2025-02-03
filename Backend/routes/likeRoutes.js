import { Router } from "express";
import { createLike, getLikeCount} from "../controller/likeController.js";

const likeRouter = Router();

likeRouter.post("/", createLike);
likeRouter.get("/:post_id", getLikeCount);

export default likeRouter;
