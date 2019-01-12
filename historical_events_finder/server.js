const express = require("express");
const app = express();
const port = 3004;
const axios = require("axios");

app.use(express.static("public"));

app.get("/events", (req, res) => {
  let { q, _page } = req.query;
  let params;
  if (_page) {
    params = {
      q,
      _page
    };
  } else {
    params = { q };
  }
  axios
    .get("http://localhost:3000/events", {
      params
    })
    .then(response => res.send(response.data));
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
