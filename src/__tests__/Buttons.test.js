import React from 'react';
import renderer from 'react-test-renderer';
import Buttons from '../components/Buttons';

describe("Buttons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Buttons />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
