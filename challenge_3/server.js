const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const models = require("./database/models");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

app.use(jsonParser);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.post("/purchase", async (req, res) => {
  let purchase_id = await models.insert();
  res.send({ purchase_id });
});

app.put("/purchase", async (req, res) => {
  console.log(req.body);
  let result = await models.update(req.body);

  res.send("coming soon");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
