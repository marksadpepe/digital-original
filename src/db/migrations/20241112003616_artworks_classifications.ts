exports.up = function(knex: any) {
   return knex.schema.createTable("Artworks_Classifications", (table: any) => {
    table.integer("artwork_id").references("id").inTable("Artworks").onDelete("CASCADE");
    table.integer("classification_id").references("id").inTable("Classifications").onDelete("CASCADE");
    table.primary(["artwork_id", "classification_id"]);
  });
}


exports.down = function(knex: any) {
   return knex.schema.dropTable("Artworks_Classifications");
}

