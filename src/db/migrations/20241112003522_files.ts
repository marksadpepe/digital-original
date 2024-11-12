exports.up = function(knex: any) {
    return knex.schema.createTable("Files", (table: any) => {
        table.uuid("id").primary();
        table.string("filename", 255).notNullable();
      });
}


exports.down = function(knex: any) {
  return knex.schema.dropTable("Files");
}

