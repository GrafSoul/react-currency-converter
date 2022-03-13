/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react';
import CurrencySelect from './CurrencySelect';

import classes from '../Currencies.module.scss';

describe('ConverterForm component', () => {
    it('ConverterForm renders', () => {
        render(
            <CurrencySelect
                classes={classes}
                error={null}
                loading={false}
                currentCurrency={'USD'}
                currencies={[]}
                changeCurrency={() => {}}
            />,
        );
        expect(screen.getByText(/Выберите базовую валюту/i)).toBeInTheDocument();
    });

    it('ConverterForm snapshot', () => {
        const converterForm = render(
            <CurrencySelect
                classes={classes}
                error={null}
                loading={false}
                currentCurrency={'USD'}
                currencies={[]}
                changeCurrency={() => {}}
            />,
        );
        expect(converterForm).toMatchSnapshot();
    });
});
