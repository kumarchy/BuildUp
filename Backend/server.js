// import "dotenv/config";
// import express from "express";
// import userRouter from "./routes/userRoutes.js";

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());

// app.use("/api/user", userRouter);

// app.get("/", (req, res) => {
//   res.send("hi everyone");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on PORT ${PORT}`);
// });

import "dotenv/config";

import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

// * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("Hi Everyone.");
});

// * Routes file
// import routes from "./routes/index.js";
import router from "./routes/index.js";
app.use(router);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));