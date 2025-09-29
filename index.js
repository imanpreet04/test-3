const express = require("express");
const { Client } = require("pg");
const app = express();
app.use(express.json());

const db = new Client({ connectionString: process.env.DATABASE_URL });
db.connect();

app.post("/user", async (req, res) => {
  const { name } = req.body;
  const query = `INSERT INTO users (name) VALUES ('${name}')`; 
  res.send("User added");
});
// hello
app.post("/eval", (req, res) => {
  const result = eval(req.body.code);
  res.send({ result });
});

app.listen(3000, () => console.log("Server running"));
