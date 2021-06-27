import React from 'react';
import { render, screen } from '@testing-library/react';

import App2 from '../../App2';

describe('App', () => {
    test('renders App component', () => {
        render(<App2 />);

        expect(screen.getByText('Search:')).toBeInTheDocument();

        expect(screen.queryByText('DDH')).toBeNull();
    });
});