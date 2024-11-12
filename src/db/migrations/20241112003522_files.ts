exports.up = function(knex: any) {
  return knex.schema.createTable("Files", (table: any) => {
    table.uuid("id").primary();
    table.string("filename", 255).notNullable();
  })
  .then(() => {
    return knex("Files").insert([
      {id: "550e8400-e29b-41d4-a716-446655440000", filename: "artwork1.jpg"},
      {id: "550e8400-e29b-41d4-a716-446655440001", filename: "artwork2.jpg"},
      {id: "550e8400-e29b-41d4-a716-446655440002", filename: "artwork3.jpg"},
      {id: "550e8400-e29b-41d4-a716-446655440003", filename: "artist1.jpg"},
      {id: "550e8400-e29b-41d4-a716-446655440004", filename: "artist2.jpg"},
    ]);
  });
};

exports.down = function(knex: any) {
  return knex.schema.dropTable("Files");
};
