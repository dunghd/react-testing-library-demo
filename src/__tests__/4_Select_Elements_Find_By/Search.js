import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../../App3';

describe('App', () => {
    test('renders App component', async () => {
        render(<App />);

        expect(screen.queryByText(/Signed in as/)).toBeNull();

        expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    });
});