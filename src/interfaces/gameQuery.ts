import { Genre } from "./genre";
import { Platform } from "./platform";

interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

export default GameQuery;
