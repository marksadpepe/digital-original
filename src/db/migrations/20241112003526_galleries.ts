exports.up = function(knex: any) {
  return knex.schema.createTable("Galleries", (table: any) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
  })
  .then(() => {
    return knex("Galleries").insert([
      {name: "Gallery One"},
      {name: "Gallery Two"},
    ]);
  });
};

exports.down = function(knex: any) {
  return knex.schema.dropTable("Galleries");
};
