import axios from "axios";

export default async (id) => {
  return await axios(`https://rickandmortyapi.com/api/character/${id}`);
};
