/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
    it('Header render', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,
        );
        expect(screen.getByText('Конвертер валют')).toBeInTheDocument();
    });

    it('Header snapshot', () => {
        const header = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,
        );
        expect(header).toMatchSnapshot();
    });
});
