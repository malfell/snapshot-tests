import { render, screen } from '@testing-library/react';
import App from './App';

// npm install --save-dev react-test-renderer
//import renderer
import renderer from 'react-test-renderer';

test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})
