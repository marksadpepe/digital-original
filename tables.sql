CREATE TABLE Artworks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC NOT NULL
);

CREATE TABLE Artists (
    id SERIAL PRIMARY KEY,
    name_original VARCHAR(255) NOT NULL,
    name_english VARCHAR(255),
    photo_id UUID REFERENCES Files(id),
    gallery_id INTEGER REFERENCES Galleries(id)
);

CREATE TABLE Galleries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Files (
    id UUID PRIMARY KEY,
    filename VARCHAR(255) NOT NULL
);

CREATE TABLE Classifications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Artworks_Files (
    artwork_id INTEGER REFERENCES Artworks(id) ON DELETE CASCADE,
    file_id UUID REFERENCES Files(id) ON DELETE CASCADE,
    PRIMARY KEY (artwork_id, file_id)
);

CREATE TABLE Artworks_Artists (
    artwork_id INTEGER REFERENCES Artworks(id) ON DELETE CASCADE,
    artist_id INTEGER REFERENCES Artists(id) ON DELETE CASCADE,
    PRIMARY KEY (artwork_id, artist_id)
);

CREATE TABLE Artworks_Classifications (
    artwork_id INTEGER REFERENCES Artworks(id) ON DELETE CASCADE,
    classification_id INTEGER REFERENCES Classifications(id) ON DELETE CASCADE,
    PRIMARY KEY (artwork_id, classification_id)
);