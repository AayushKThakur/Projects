const { Schema } = require("mongoose");

const ObjectId = mongoose.ObjectId;
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  first_name: String,
  last_name: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  first_name: String,
  last_name: String,
});

const courseSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  first_name: String,
  last_name: String,
});

const purchaseSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  first_name: String,
  last_name: String,
});

const userModel = mongoose.model("user", User);
const adminModel = mongoose.model("todos", Todo);

module.exports = {
  UserModel: UserModel,
  TodoModel: TodoModel,
};
