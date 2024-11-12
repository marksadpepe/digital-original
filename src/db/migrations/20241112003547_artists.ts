exports.up = function(knex: any) {
  return knex.schema.createTable("Artists", (table: any) => {
    table.increments("id").primary();
    table.string("name_original", 255).notNullable();
    table.string("name_english", 255);
    table.uuid("photo_id").references("id").inTable("Files");
    table.integer("gallery_id").references("id").inTable("Galleries");
  });
}


exports.down = function(knex: any) {
  return knex.schema.dropTable("Artists");
}

