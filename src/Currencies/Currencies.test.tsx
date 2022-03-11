/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';

import Currencies from './Currencies';

describe('Currencies component', () => {
    it('Currencies render', () => {
        render(
            <Provider store={store}>
                <Currencies />
            </Provider>,
        );
        expect(screen.getByText('Выберите базовую валюту')).toBeInTheDocument();
    });

    it('Currencies snapshot', () => {
        const currencies = render(
            <Provider store={store}>
                <Currencies />
            </Provider>,
        );
        expect(currencies).toMatchSnapshot();
    });
});
