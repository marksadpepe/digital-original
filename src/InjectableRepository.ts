import {
  PaginatedArtwork,
  DbArtistWithoutArtworks,
  DbArtistTotalValue,
  DbArtistArtsworkCount
} from "./common/types";

import {db} from "./db/db";

export class InjectableRepository {
  constructor() {}

  async getPaginatedArtworks(
    limit: number,
    offset: number,
    classificatonName?: string
  ): Promise<PaginatedArtwork[]> {
    let artworks: PaginatedArtwork[] = [];

    try {
      const promise = db("Artworks")
        .join("Artworks_Classifications", "Artworks_Classifications.artwork_id", "Artworks.id")
        .join("Classifications", "Artworks_Classifications.classification_id", "Classifications.id")
        .join("Artworks_Artists", "Artworks_Artists.artwork_id", "Artworks.id")
        .join("Artists", "Artworks_Artists.artist_id", "Artists.id")
        .join("Galleries", "Artists.gallery_id", "Galleries.id")
        .select(
          "Artworks.name as name",
          "Classifications.name as classification",
          "Artists.name_original as artist",
          "Galleries.name as gallery"
        )
        .where(function() {
          if (classificatonName) {
            this.where("Classifications.name", classificatonName);
          }
        });

      if (limit > 0) {
        artworks = await promise.limit(limit).offset(offset);
      } else {
        artworks = await promise;
      }
    } catch (err) {
      throw new Error(err);
    }

    return artworks;
  }

  async getArtistsPortfolio(): Promise<DbArtistTotalValue[]> {
    let artists: DbArtistTotalValue[] = [];

    try {
      artists = await db("Artists")
        .leftJoin("Artworks_Artists", "Artworks_Artists.artist_id", "Artists.id")
        .leftJoin("Artworks", "Artworks_Artists.artwork_id", "Artworks.id")
        .groupBy("Artists.name_original")
        .select("Artists.name_original as artist")
        .sum("Artworks.price as total_value")
    } catch (err) {
      throw new Error(err);
    }

    return artists;
  }

  async getArtistWithArtworkCount(id: number): Promise<Partial<DbArtistArtsworkCount>> {
    let artist: Partial<DbArtistArtsworkCount> = {};

    try {
      [artist] = await db("Artists")
        .leftJoin("Files", "Artists.photo_id", "Files.id")
        .leftJoin("Artworks_Artists", "Artists.id", "Artworks_Artists.artist_id")
        .where("Artists.id", id)
        .groupBy("Artists.id", "Files.filename")
        .select(
          "Artists.name_original as name_original",
          "Artists.name_english as name_english",
          "Files.filename as photo"
        )
        .count("Artworks_Artists.artwork_id as artworks_count");
    } catch (err) {
      throw new Error(err);
    }
    
    return artist ?? {};
  }

  async getArtistWithNoArtworks(): Promise<DbArtistWithoutArtworks[]> {
    let artists: DbArtistWithoutArtworks[] = [];

    try {
      artists = await db("Artists")
        .leftJoin("Galleries", "Artists.gallery_id", "Galleries.id")
        .leftJoin("Artworks_Artists", "Artists.id", "Artworks_Artists.artist_id")
        .select(
          "Artists.name_original as name_original",
          "Artists.name_english as name_english",
          "Galleries.name as gallery"
        )
        .whereNull("Artworks_Artists.artwork_id")
        .groupBy("Artists.id", "Galleries.name");
    } catch (err) {
      throw new Error(err);
    }

    return artists;
  }
}
