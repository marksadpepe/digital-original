exports.up = function(knex: any) {
  return knex.schema.createTable("Artworks", (table: any) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.decimal("price").notNullable();
  })
  .then(() => {
    return knex("Artworks").insert([
      {name: "Guernica", price: 4500},
      {name: "Les Demoiselles d’Avignon", price: 3000},
      {name: "Starry Night", price: 1000},
      {name: "Sunflowers", price: 1200},
      {name: "Небезпека", price: 2000},
      {name: "Бенкет мовчазних голосів", price: 2500},
      {name: "Mona Lisa", price: 3000},
      {name: "The Last Supper", price: 4000},
      {name: "Portrait of Dora Maar", price: 3200},
      {name: "Irises", price: 1700}
    ]);
  });
};

exports.down = function(knex: any) {
  return knex.schema.dropTable("Artworks");
};
