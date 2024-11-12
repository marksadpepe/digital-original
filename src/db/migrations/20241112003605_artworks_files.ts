exports.up = function(knex: any) {
  return knex.schema.createTable("Artworks_Files", (table: any) => {
    table.integer("artwork_id").references("id").inTable("Artworks").onDelete("CASCADE");
    table.uuid("file_id").references("id").inTable("Files").onDelete("CASCADE");
    table.primary(["artwork_id", "file_id"]);
  })
  .then(() => {
    return knex("Artworks_Files").insert([
      {artwork_id: 1, file_id: "550e8400-e29b-41d4-a716-446655440000"},
      {artwork_id: 2, file_id: "550e8400-e29b-41d4-a716-446655440001"},
      {artwork_id: 3, file_id: "550e8400-e29b-41d4-a716-446655440002"},
    ]);
  });
};

exports.down = function(knex: any) {
  return knex.schema.dropTable("Artworks_Files");
};
