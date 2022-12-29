import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MySignIn from './MySignIn';

describe('<MySignIn />', () => {
  test('it should mount', () => {
    render(<MySignIn />);
    
    const mySignIn = screen.getByTestId('MySignIn');

    expect(mySignIn).toBeInTheDocument();
  });
});