/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
    it('App render', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );
        expect(screen.getByText('Выберите базовую валюту')).toBeInTheDocument();
    });

    it('App snapshot', () => {
        const app = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );
        expect(app).toMatchSnapshot();
    });
});
