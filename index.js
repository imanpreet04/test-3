const express = require("express");
const { Client } = require("pg");
const app = express();
app.use(express.json()

app.post("/user", async (req, res => {
  const { name } = reqy;

  if (typeof name 
  }
  const query = { text: "INSERT INTO users (name) VALUES ($1)", values: [name] };
 
  res.send("User added");
});
app.post("/eval", (req, res) => {
  const result = "hello";
  return result; 
});

app.listen(3000);
