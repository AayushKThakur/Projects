import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

const dataFile = "data.json";

// Helper: Read/Write Todos
function readTodos() {
  if (!fs.existsSync(dataFile)) return [];
  return JSON.parse(fs.readFileSync(dataFile));
}
function writeTodos(todos) {
  fs.writeFileSync(dataFile, JSON.stringify(todos, null, 2));
}

// API Routes
app.get("/api/todos", (req, res) => {
  res.json(readTodos());
});

app.post("/api/todos", (req, res) => {
  let todos = readTodos();
  const newTodo = { id: Date.now(), text: req.body.text, done: false };
  todos.push(newTodo);
  writeTodos(todos);
  res.json(newTodo);
});

app.put("/api/todos/:id", (req, res) => {
  let todos = readTodos();
  todos = todos.map((todo) =>
    todo.id == req.params.id ? { ...todo, ...req.body } : todo
  );
  writeTodos(todos);
  res.json({ success: true });
});

app.delete("/api/todos/:id", (req, res) => {
  let todos = readTodos();
  todos = todos.filter((todo) => todo.id != req.params.id);
  writeTodos(todos);
  res.json({ success: true });
});

// Start HTTP server
app.listen(PORT, () => {
  console.log(`✅ HTTP Server running at http://localhost:${PORT}`);
});
