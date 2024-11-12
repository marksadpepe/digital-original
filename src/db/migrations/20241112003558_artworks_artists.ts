exports.up = function(knex: any) {
  return knex.schema.createTable("Artworks_Artists", (table: any) => {
    table.integer("artwork_id").references("id").inTable("Artworks").onDelete("CASCADE");
    table.integer("artist_id").references("id").inTable("Artists").onDelete("CASCADE");
    table.primary(["artwork_id", "artist_id"]);
  });
}


exports.down = function(knex: any) {
  return knex.schema.dropTable("Artworks_Artists");
}

