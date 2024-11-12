exports.up = function(knex: any) {
   return knex.schema.createTable("Artworks_Classifications", (table: any) => {
    table.integer("artwork_id").references("id").inTable("Artworks").onDelete("CASCADE");
    table.integer("classification_id").references("id").inTable("Classifications").onDelete("CASCADE");
    table.primary(["artwork_id", "classification_id"]);
  })
  .then(() => {
    return knex("Artworks_Classifications").insert([
      {artwork_id: 1, classification_id: 1},
      {artwork_id: 2, classification_id: 2},
      {artwork_id: 3, classification_id: 3},
      {artwork_id: 4, classification_id: 4},
      {artwork_id: 5, classification_id: 1},
      {artwork_id: 6, classification_id: 2},
      {artwork_id: 7, classification_id: 3},
      {artwork_id: 8, classification_id: 4},
      {artwork_id: 9, classification_id: 1},
      {artwork_id: 10, classification_id: 2},
    ]);
  });
};

exports.down = function(knex: any) {
   return knex.schema.dropTable("Artworks_Classifications");
};
