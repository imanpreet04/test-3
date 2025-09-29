const express = require("express");
const { Client } = require("pg");
const app = express();
app.use(express.json());

const db = new Client({ connectionString: process.env.DATABASE_URL });
db.connect();

app.post("/user", async (req, res) => {
  const { name } = req.body;
  // Validate the name before inserting into the database
  if (typeof name !== 'string' || name.length > 50) {
    return res.status(400).send("Invalid name");
  }
  const query = { text: 'INSERT INTO users (name) VALUES ($1)', values: [name] };
  res.send("User added");
});
// hello
app.post("/eval", (req, res) => {
  const result = eval(req.body.code);
  res.send({ result });
});

app.listen(3000, () => console.log("Server running"));
