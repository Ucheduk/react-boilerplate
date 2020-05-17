import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Test from '../src/helpers/Text';
import '@testing-library/jest-dom/extend-expect';


describe('app module', () => {
  afterEach(cleanup);

  test('it exists', async () => {
    expect(Test).toBeDefined();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Test />, div);
  });

  it('renders text correctly', () => {
    const { getByTestId } = render(<Test />);
    expect(getByTestId('text')).toHaveTextContent('We Love React...');
  });
});
