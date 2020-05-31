import Character from "../components/Character";

it("render correctlty", () => {
  const char = {
    id: 1,
    image: "",
    name: "Rick Sanchex",
    gender: "Male",
    species: "Human",
    status: "Alive",
    created: "2017-11-04",
  };
  const wrapper = shallow(<Character char={char} loading={false} />);
  expect(wrapper).toMatchSnapshot();
});
