import ReactShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import Header from "../../components/header";

test("Should render the header", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();

  console.log(renderer.getRenderOutput());
});
