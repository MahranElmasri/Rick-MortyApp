import CharacterCard from "../components/CharacterCard";

it("render correctly", () => {
  const wrapper = shallow(
    <CharacterCard
      match={{
        params: { id: 1 },
        isExact: true,
        path: "/details/:id",
      }}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
