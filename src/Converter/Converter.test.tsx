/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';

import Converter from './Converter';

describe('Converter component', () => {
    it('Converter renders', () => {
        render(
            <Provider store={store}>
                <Converter />
            </Provider>,
        );
        expect(screen.getByText('15 usd in rub')).toBeInTheDocument();
    });

    it('Converter snapshot', () => {
        const converter = render(
            <Provider store={store}>
                <Converter />
            </Provider>,
        );
        expect(converter).toMatchSnapshot();
    });
});
