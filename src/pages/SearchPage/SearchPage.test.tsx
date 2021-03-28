import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchPage from './SearchPage';

describe('<SearchPage />', () => {
  test('it should mount', () => {
    render(<SearchPage />);
    
    const search = screen.getByTestId('Search');

    expect(search).toBeInTheDocument();
  });
});
