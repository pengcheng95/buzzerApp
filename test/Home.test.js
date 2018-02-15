import React from 'react';
import Home from '../client/components/Home.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Home/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});