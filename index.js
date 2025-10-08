const express = require("express");
const { Client } = require("pg");
const app = express();
app.use(express.json());

app.post("/user", async (req, res => {
  const { name } = req.body;

  if (typeof name !== "string" || name.length > 50) {
    return res.status(400).send("Invalid name");
  }
  const query = { text: "INSERT INTO users (name) VALUES ($1)", values: [name] };
 
  res.send("User added");
});
app.post("/eval", (req, res) => {
  const result = "hello";
  return result; 
});

app.listen(3000);
