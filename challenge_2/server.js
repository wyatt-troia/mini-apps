const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const fs = require("fs-extra");
var Busboy = require("busboy");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "/client")));

app.post("/JSON-to-CSV", (req, res) => {
  // console.log(JSON.parse(req.body.JSON));

  var busboy = new Busboy({ headers: req.headers });
  let json = "";
  busboy.on("file", function(fieldname, file, filename, encoding, mimetype) {
    console.log(
      "File [" +
        fieldname +
        "]: filename: " +
        filename +
        ", encoding: " +
        encoding +
        ", mimetype: " +
        mimetype
    );
    file.on("data", function(data) {
      console.log("File [" + fieldname + "] got " + data.length + " bytes");
      json += data;
    });
    file.on("end", function() {
      console.log("File [" + fieldname + "] Finished");
      console.log(`JSON: ${json}`);
      console.log(JSON.parse(json));
    });
  });

    // var busboy = new Busboy({ headers: req.headers });
  // busboy.on("file", function(fieldname, file, filename, encoding, mimetype) {
  //   console.log("filename: " + filename);
  //   var saveTo = path.join(__dirname, "./json_input/", filename);
  //   console.log("Uploading: " + saveTo);
  //   file.pipe(fs.createWriteStream(saveTo));
  // });
  // busboy.on("finish", function() {
  //   console.log("Upload complete");
  //   res.writeHead(200, { Connection: "close" });
  //   res.end("That's all folks!");
  // });
  // return req.pipe(busboy);
  busboy.on("finish", function() {
    console.log("Done parsing form!");
    let record = JSON.parse(json);

    let flattenedRecords = [];
    let fields = [];

    // create flat array of record objects and array of record fields
    (function addToFlattenedRecords(record) {
      let recordWithoutChildren = {};
      for (var prop in record) {
        // if prop not included in fields array and is not children, push it
        if (prop !== "children") {
          if (!fields.includes(prop)) {
            fields.push(prop);
          }
          recordWithoutChildren[prop] = record[prop];
        }
      }
      flattenedRecords.push(recordWithoutChildren);

      for (let i = 0; i < record.children.length; i++) {
        addToFlattenedRecords(record.children[i]);
      }
    })(record);

    // create array of arrays for each record (inner array = record field)
    let rows = [fields.join(",")];
    for (var flattenedRecord of flattenedRecords) {
      let recordArray = [];
      for (var field of fields) {
        recordArray.push(flattenedRecord[field]);
      }
      rows.push(recordArray.join(","));
    }

    // join arrays with commas and newlines
    let csv = rows.join("\n");
    console.log(csv);
    console.log(fields);
    console.log(flattenedRecords);
    let html_csv = csv.split("\n").join("<br>");
    res.send(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>JSON-to-CSV</title>
        </head>
        <body>
          <h1>Convert JSON to CSV</h1>
          <form action="/JSON-to-CSV" method="post" enctype="multipart/form-data">
            <b><label for="JSON">JSON:</label></b> <br />
            <input type="file" id="JSON" name="JSON" accept=".json" /> <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
          <br>
          <div id="CSV_result"><b>CSV:</b> <br>${html_csv}</div>
        </body>
      </html>
      `);
  });
  req.pipe(busboy);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
