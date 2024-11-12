exports.up = function(knex: any) {
  return knex.schema.createTable("Artists", (table: any) => {
    table.increments("id").primary();
    table.string("name_original", 255).notNullable();
    table.string("name_english", 255);
    table.uuid("photo_id").references("id").inTable("Files");
    table.integer("gallery_id").references("id").inTable("Galleries");
    table.timestamp("deleted_at").nullable().defaultTo(null);
  })
  .then(() => {
    return knex("Artists").insert([
      {
        name_original: "Pablo Picasso",
        name_english: null,
        photo_id: "550e8400-e29b-41d4-a716-446655440003",
        gallery_id: 1
      },
      {
        name_original: "Vincent van Gogh",
        name_english: null,
        photo_id: "550e8400-e29b-41d4-a716-446655440004",
        gallery_id: 1
      },
      {
        name_original: "Юрій Болса",
        name_english: "Yurii Bolsa",
        photo_id: null,
        gallery_id: 2
      },
      {
        name_original: "Leonardo da Vinci",
        name_english: null,
        photo_id: null,
        gallery_id: 2
      },
      {
        // new user just for demonstration
        name_original: "Mark Parker",
        name_english: null,
        photo_id: null,
        gallery_id: 1
      },
    ]);
  });
};

exports.down = function(knex: any) {
  return knex.schema.dropTable("Artists");
};
