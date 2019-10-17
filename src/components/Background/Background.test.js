import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Background from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Background />).toJSON()

  expect(tree).toMatchSnapshot()
})
