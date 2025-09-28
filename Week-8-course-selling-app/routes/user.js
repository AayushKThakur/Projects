const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  res.json({
    message: "signup endpoint",
  });
});

userRouter.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
});

userRouter.get("/purchases", async (req, res) => {
  res.json({
    message: "courses purchased by user endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
