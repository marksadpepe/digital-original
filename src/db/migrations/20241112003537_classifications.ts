exports.up = function(knex: any) {
  return knex.schema.createTable("Classifications", (table: any) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
  })
  .then(() => {
    return knex("Classifications").insert([
      {name: "Modern Art"},
      {name: "Contemporary Art"},
      {name: "Abstract"},
      {name: "Renaissance"},
    ]);
  });
};

exports.down = function(knex: any) {
  return knex.schema.dropTable("Classifications");
};
