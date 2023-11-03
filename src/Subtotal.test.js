import React from 'react';
import renderer from 'react-test-renderer';

import Subtotal from './Login';

it('performs Subtotal page snapshot testing', () => {
const tree = renderer.create(<Subtotal />).toJSON();
expect(tree).toMatchSnapshot();
});
