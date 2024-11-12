exports.up = function(knex: any) {
  return knex.schema.createTable("Artworks_Artists", (table: any) => {
    table.integer("artwork_id").references("id").inTable("Artworks").onDelete("CASCADE");
    table.integer("artist_id").references("id").inTable("Artists").onDelete("CASCADE");
    table.primary(["artwork_id", "artist_id"]);
  })
  .then(() => {
    return knex("Artworks_Artists").insert([
      {artwork_id: 1, artist_id: 1},
      {artwork_id: 2, artist_id: 1},
      {artwork_id: 3, artist_id: 2},
      {artwork_id: 4, artist_id: 2},
      {artwork_id: 5, artist_id: 3},
      {artwork_id: 6, artist_id: 3},
      {artwork_id: 7, artist_id: 4},
      {artwork_id: 8, artist_id: 4},
      {artwork_id: 9, artist_id: 1},
      {artwork_id: 10, artist_id: 2},
    ]);
  });
};

exports.down = function(knex: any) {
  return knex.schema.dropTable("Artworks_Artists");
};
