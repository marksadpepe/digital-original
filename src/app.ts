import {config} from "dotenv";
config();

import {db} from "./db/db";
import {InjectableService} from "./InjectableService";

const func = async () => {
  try {
    const service = new InjectableService();

    const paginatedArtworks = await service.getPaginatedArtworks(0, 1);
    console.log(paginatedArtworks);
    console.log("======================================");

    const artistsPortfolio = await service.getArtistsPortfolio();
    console.log(artistsPortfolio);
    console.log("======================================");

    const artist = await service.getArtistWithArtworkCount(6);
    console.log(artist);
    console.log("======================================");

    const artistsWithoutArtworks = await service.getArtistWithNoArtworks();
    console.log(artistsWithoutArtworks);
  } catch (err) {
    console.error(err);
  } finally {
    await db.destroy();
  }
};

func()
