const fackData = [
  {
    id: 1,
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    created: "2017-11-04",
    episode: [
      {
        id: 28,
        name: "The Ricklantis Mixup",
        air_date: "September 10, 2017",
        episode: "S03E07",
      },
    ],
  },
];

export default async () => {
  return await new Promise((resolve) => {
    resolve(fackData);
  });
};
