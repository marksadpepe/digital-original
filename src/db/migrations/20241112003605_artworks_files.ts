exports.up = function(knex: any) {
  return knex.schema.createTable("Artworks_Files", (table: any) => {
    table.integer("artwork_id").references("id").inTable("Artworks").onDelete("CASCADE");
    table.uuid("file_id").references("id").inTable("Files").onDelete("CASCADE");
    table.primary(["artwork_id", "file_id"]);
  });
}


exports.down = function(knex: any) {
  return knex.schema.dropTable("Artworks_Files");
}

