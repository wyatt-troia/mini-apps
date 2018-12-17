const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "/client")));

app.post("/JSON-to-CSV", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
