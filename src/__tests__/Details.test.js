import React from 'react';
import { create } from 'react-test-renderer';
import Buttons from '../components/Buttons';

test("snapshot", () => {
 const c = create(<Buttons />)
 expect(c.toJSON()).toMatchSnapshot();
})
