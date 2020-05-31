import axios from "axios";

export default async (status, species) => {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/?status=${status}&species=${species}`
  );
  return res.data;
};
