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

const get = async purchase_id => {
  console.log(`about to get purchase_id ${purchase_id}`);
  let result = await knex("purchases")
    .where({ purchase_id })
    .select();
  return result[0];
};

module.exports = {
  insert,
  update,
  get
};
