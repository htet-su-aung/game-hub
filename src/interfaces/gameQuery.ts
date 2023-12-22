import { Genre } from "./genre";
import { Platform } from "./platform";

interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

export default GameQuery;
