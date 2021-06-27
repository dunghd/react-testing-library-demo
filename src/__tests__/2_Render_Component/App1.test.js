import React from 'react';
import { render, screen } from '@testing-library/react';

import App1 from '../../App1';

describe('App1', () => {
    test('renders App component', () => {
        render(<App1 />);

        // screen.debug();
    });
});