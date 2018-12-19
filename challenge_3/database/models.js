const db = require("./index.js");

db.query("SELECT * FROM purchases", function(error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results);
});
