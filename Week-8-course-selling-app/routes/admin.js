const { Router } = require("express");
const adminRouter = Router();
const adminModel = require("../db");

adminRouter.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  res.json({
    message: "signup endpoint",
  });
});

adminRouter.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
});

adminRouter.post("/course", async (req, res) => {
  res.json({
    message: "signin endpoint",
  });
});

adminRouter.put("/course", async (req, res) => {
  res.json({
    message: "adding courses",
  });
});

adminRouter.get("/course/bulk", async (req, res) => {
  res.json({
    message: "get all courses",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
