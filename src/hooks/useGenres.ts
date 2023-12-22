import { Genre } from "../interfaces/genre";
import useData from "./useData";

const useGenres = () => {
  return useData<Genre>("/genres");
};

export default useGenres;
