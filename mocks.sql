INSERT INTO Files (id, filename) VALUES 
('550e8400-e29b-41d4-a716-446655440000', 'artwork1.jpg'),
('550e8400-e29b-41d4-a716-446655440001', 'artwork2.jpg'),
('550e8400-e29b-41d4-a716-446655440002', 'artwork3.jpg'),
('550e8400-e29b-41d4-a716-446655440003', 'artist1.jpg'),
('550e8400-e29b-41d4-a716-446655440004', 'artist2.jpg');

INSERT INTO Classifications (id, name) VALUES 
(1, 'Modern Art'),
(2, 'Contemporary Art'),
(3, 'Abstract'),
(4, 'Renaissance');

INSERT INTO Galleries (id, name) VALUES 
(1, 'Gallery One'),
(2, 'Gallery Two');

INSERT INTO Artists (id, name_original, name_english, photo_id, gallery_id) VALUES 
(1, 'Pablo Picasso', NULL, '550e8400-e29b-41d4-a716-446655440003', 1),
(2, 'Vincent van Gogh', NULL, '550e8400-e29b-41d4-a716-446655440004', 1),
(3, 'Юрій Болса', 'Yurii Bolsa', NULL, 2),
(4, 'Leonardo da Vinci', NULL, NULL, 2);

INSERT INTO Artworks (id, name, price) VALUES 
(1, 'Guernica', 4500),
(2, 'Les Demoiselles d’Avignon', 3000),
(3, 'Starry Night', 1000),
(4, 'Sunflowers', 1200),
(5, 'Небезпека', 2000),
(6, 'Бенкет мовчазних голосів', 2500),
(7, 'Mona Lisa', 3000),
(8, 'The Last Supper', 4000),
(9, 'Portrait of Dora Maar', 3200),
(10, 'Irises', 1700);

INSERT INTO Artworks_Files (artwork_id, file_id) VALUES 
(1, '550e8400-e29b-41d4-a716-446655440000'),
(2, '550e8400-e29b-41d4-a716-446655440001'),
(3, '550e8400-e29b-41d4-a716-446655440002');


INSERT INTO Artworks_Artists (artwork_id, artist_id) VALUES 
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 3),
(6, 3),
(7, 4),
(8, 4),
(9, 1),
(10, 2);

INSERT INTO Artworks_Classifications (artwork_id, classification_id) VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 1),
(6, 2),
(7, 3),
(8, 4),
(9, 1),
(10, 2);