import express from "express";

const app = express(); //app instance of express

//route handler
app.get("/", (req, res) => {
  //whenever a 'get' request comes to a '/' website, with two parameter, request and response
  res.send("Hello World"); //Run this code.
});

app.post("/", (req, res) => {
  res.send(" Hello World from the asd endpoint");
});

app.get("/asd", (req, res) => {
  res.send("Hello from the asd endpoint");
});

app.listen(3000); //which port
