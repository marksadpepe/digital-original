import { InjectableRepository } from "./InjectableRepository";
import {
  PaginatedArtwork,
  ArtistPortfolio,
  ArtistArtworkCount,
  ArtistWithoutArtworks,
  DbArtistWithoutArtworks
} from "./common/types";

export class InjectableService {
  private repository: InjectableRepository;

  constructor() {
    this.repository = new InjectableRepository(); // should be Singleton
  }

  async getPaginatedArtworks(
    limit: number,
    offset: number,
    classificatonName?: string
  ): Promise<PaginatedArtwork[]> {
    try {
      const artworks = await this.repository.getPaginatedArtworks(limit, offset, classificatonName);

      return artworks;
    } catch (err) {
      console.error(`Failed to retrieve paginated artworks: ${err}`);
      return [];
    }
  }

  async getArtistsPortfolio(): Promise<ArtistPortfolio[]> {
    try {
      const data = await this.repository.getArtistsPortfolio();
      const artists = data.map((item: {artist: string, total_value: string}) => ({
        artist: item.artist,
        portfolio: parseInt(item.total_value ?? "0"),
      }));

      return artists.sort((a, b) => b.portfolio - a.portfolio); // order by desc
    } catch (err) {
      console.error(`Failed to retrieve artist portfolio: ${err}`);
      return [];
    }
  }

  async getArtistWithArtworkCount(id: number): Promise<Partial<ArtistArtworkCount>> {
    try {
      const data = await this.repository.getArtistWithArtworkCount(id);
      if (Object.keys(data).length === 0) {
        return data;
      }
      
      return {
        name: data.name_english ?? data.name_original,
        photo: data.photo ?? "",
        artworksCount: parseInt(data.artworks_count ?? "0"),
      }
    } catch (err) {
      console.error(`Failed to retrieve artist with artworks count: ${err}`);
      return {};
    }
  }

  async getArtistWithNoArtworks(): Promise<ArtistWithoutArtworks[]> {
    try {
      const data = await this.repository.getArtistWithNoArtworks();
      const artists = data.map((item: DbArtistWithoutArtworks) => ({
        name: item.name_english ?? item.name_original,
        gallery: item.gallery,
        portfolio: 0,
      }));

      return artists;
    } catch (err) {
      console.error(`Failed to retrieve artists without any artworks: ${err}`);
      return [];
    }
  }
}
