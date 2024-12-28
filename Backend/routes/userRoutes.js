// import { Router } from "express";
// import { createUser} 
// from "../controller/userController.js";

// // const userRoutes = Router();
// // userRoutes.post("/",createUser);

// // export default userRoutes;

// const router = Router();
// router.post("/", createUser);
// export default router;


import { Router } from "express";
import {
  createUser,
} from "../controller/userController.js";

const userRouter = Router();
userRouter.post("/", createUser);
export default userRouter;