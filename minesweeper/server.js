const express = require("express");
const app = express();
const port = 3006;

app.use(express.static("build"));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
