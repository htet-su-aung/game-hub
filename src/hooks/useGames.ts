import useData from "./useData";
import { Game } from "../interfaces/game";
import GameQuery from "../interfaces/gameQuery";

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );
};

export default useGames;
