// const db = require("./index.js");

// db.query("SELECT * FROM purchases", function(error, results, fields) {
//   if (error) throw error;
//   console.log("The solution is: ", results);
// });

var knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "checkout"
  }
});

knex
  .select()
  .table("purchases")
  .then(result => console.log(result));
