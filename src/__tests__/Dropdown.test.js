import Dropdown from "../components/Dropdown";

it("should render correctlly", () => {
  const options = [];
  const onChange = jest.fn();
  const { getByTestId } = render(
    <Dropdown
      options={options}
      onChange={onChange}
      onSelect={jest.fn()}
      placeholder="Filter by status"
    />
  );

  expect(getByTestId("dropdown")).toMatchSnapshot();
});

it("should render placeholder text", () => {
  const options = [];
  const onChange = jest.fn();
  const { getByTestId, getByText } = render(
    <Dropdown
      options={options}
      onChange={onChange}
      onSelect={jest.fn()}
      placeholder="Filter by status"
    />
  );
  expect(getByTestId("dropdown")).toHaveTextContent("Filter by status");
});

it("should render first select text", () => {
  const options = ["Alive", "Dead", "Unknown"];
  const onChange = jest.fn();
  const { getByTestId, getByText } = render(
    <Dropdown
      options={options}
      onChange={onChange}
      onSelect={jest.fn()}
      placeholder="Filter by status"
    />
  );
  expect(getByTestId("dropdown")).toHaveTextContent("Filter by status");
  fireEvent.click(getByText("Alive"));
  expect(getByTestId("dropdown")).toHaveTextContent("Alive");
});
