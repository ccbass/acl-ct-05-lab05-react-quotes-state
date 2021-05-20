import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SimpsonsQuote } from './SimpsonsQuote';

describe('Simpsons quote container tests', () => {

  it('loads the components correctly after pressing the button', async () => {
    render(<SimpsonsQuote />);

    screen.getByText('Click to get a quote!')

    const getButton = await screen.getByRole('button', {name: 'Get Quote'})
    expect(getButton).toBeInTheDocument()
    userEvent.click(getButton)

    return waitFor(async () => {
      const image = await screen.getByAltText('simpsons character image');
      expect(image).toBeInTheDocument()
    });

  });


});