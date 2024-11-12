exports.up = function(knex: any) {
  return knex.schema.createTable("Galleries", (table: any) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
  });
}


exports.down = function(knex: any) {
  return knex.schema.dropTable("Galleries");
}
