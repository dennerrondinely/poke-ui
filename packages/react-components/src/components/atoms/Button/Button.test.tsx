import React from 'react';
import { Button } from '.';
import { render } from '@testing-library/react';

describe('Button', () => {
  test('renders correctly', () => {
    const tree = render(<Button />);
    expect(tree).toMatchSnapshot();
  });
});