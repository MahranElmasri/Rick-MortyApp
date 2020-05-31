import CharacterList from "../components/CharacterList";

const characters = [
  {
    id: 1,
    image: "",
    name: "Rick Sanchez",
    gender: "Male",
    species: "Human",
    status: "Alive",
    created: "2017-11-04",
  },
  {
    id: 2,
    image: "",
    name: "Morty Smith",
    gender: "Male",
    species: "Human",
    status: "Alive",
    created: "2017-11-04",
  },
];

it("render corectlly", () => {
  const wrapper = shallow(
    <CharacterList character={characters} loading={false} />
  );

  expect(wrapper).toMatchSnapshot();
});

jest.mock("../service/fetchCharacters.js");

it("should fetch characters", (done) => {
  const wrapper = shallow(
    <CharacterList character={characters} loading={false} />
  );
  setTimeout(() => {
    wrapper.update();
    expect(wrapper.find("Character").length).toEqual(2);
    done();
  });
});
