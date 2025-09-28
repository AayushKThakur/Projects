const express = require("express");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const { z } = require("zod");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
});

app.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
});
