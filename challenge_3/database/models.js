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

const insert = async () => {
  let result = await knex("purchases").insert({});
  let purchase_id = result[0];
  return purchase_id;
};

const update = async data => {
  let purchase_id = data.purchase_id;
  console.log("data:");
  console.log(data);
  let result = await knex("purchases")
    .where({ purchase_id })
    .update(data);
  console.log(`rows affected ${result}`);
  return result;
};

module.exports = {
  insert,
  update
};
