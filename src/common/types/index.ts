export type PaginatedArtwork = {
  name: string;
  classification: string;
  artist: string;
  gallery: string;
};

export type DbArtistTotalValue = {
  artist: string;
  total_value: string;
};

export type DbArtistArtsworkCount = {
  name_original: string;
  name_english: string;
  photo: string;
  artworks_count: string;
};

export type DbArtistWithoutArtworks = {
  name_original: string;
  name_english?: string;
  gallery: string;
};

export type ArtistPortfolio = {
  artist: string;
  portfolio: number;
};

export type ArtistArtworkCount = {
  name: string;
  photo: string;
  artworksCount: number;
};

export type ArtistWithoutArtworks = {
  name: string;
  gallery: string;
  portfolio: number;
};
