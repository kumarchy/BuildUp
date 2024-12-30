import { Router } from "express";
import userRouter from "./userRoutes.js";
import postRouter from "./postRoutes.js";

const router = Router();

router.use("/api/user",userRouter);
router.use("/api/post",postRouter);
export default router;