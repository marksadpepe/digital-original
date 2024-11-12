exports.up = function(knex: any) {
    return knex.schema.createTable("Artworks", (table: any) => {
      table.increments("id").primary();
      table.string("name", 255).notNullable();
      table.decimal("price").notNullable();
    });
  }

  exports.down = function(knex: any) {
    return knex.schema.dropTable("Artworks");
  }
