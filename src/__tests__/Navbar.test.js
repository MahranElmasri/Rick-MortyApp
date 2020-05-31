import Navbar from "../components/layout/Navbar";
import React from "react";

describe("Navbar Component", () => {
  it("should render navbar component right way", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.length).toBe(1);
  });
});
