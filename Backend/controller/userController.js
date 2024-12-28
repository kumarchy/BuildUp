import e from "express";
import prisma from "../db/db.config.js";

export const createUser = async (req, resp) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return resp.json({
      status: 400,
      message: "Enter the required credentials",
    });
  }

  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findUser) {
    return resp.json({
      status: 400,
      message: "Email already available. Please enter another email",
    });
  }

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  return resp.json({
    status: 200,
    data: newUser,
    message: "User created Successfully",
  });
};

// export const createUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   const findUser = await prisma.user.findUnique({
//     where: {
//       email: email,
//     },
//   });

//   if (findUser) {
//     return res.json({
//       status: 400,
//       message: "Email Already Taken . please another email.",
//     });
//   }

//   const newUser = await prisma.user.create({
//     data: {
//       name: name,
//       email: email,
//       password: password,
//     },
//   });

//   return res.json({ status: 200, data: newUser, msg: "User created." });
// };
