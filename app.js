const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static("Public"));

app.post("/post", (req, res) => {
  const name = req.body.name;
  res.send(`Hello ${name}.`);
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT} ...`));
