import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Search from '../../Search';

describe('Search', () => {
    test('calls the onChange callback handler', async () => {
        const onChange = jest.fn();

        render(
            <Search value="" onChange={onChange}>
                Search:
            </Search>
        );

        await userEvent.type(screen.getByRole('textbox'), 'DDH');

        expect(onChange).toHaveBeenCalledTimes(3);
    });
});