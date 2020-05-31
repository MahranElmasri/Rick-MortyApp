import React from "react";

import Spinner from "../components/layout/Spinner";

afterEach(cleanup);

it("should render correctly", () => {
  const { asFragment } = render(<Spinner />);
  expect(asFragment()).toMatchSnapshot();
});

it("should test classname", () => {
  const { getByTestId, getByText } = render(<Spinner />);
  expect(getByTestId("spinner-test")).toHaveClass("spinner");
});
