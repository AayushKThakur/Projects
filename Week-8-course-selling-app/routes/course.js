const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", async (req, res) => {
  res.json({
    message: " course purchasing endpoint",
  });
});

courseRouter.get("/preview", async (req, res) => {
  res.json({
    message: "all courses endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
