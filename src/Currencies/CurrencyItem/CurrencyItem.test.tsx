/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react';
import CurrencyItem from './CurrencyItem';

describe('CurrencyItem component', () => {
    it('CurrencyItem renders', () => {
        render(<CurrencyItem id={'USD'} currentCurrency={'USD'} value={1.234} code={'RUB'} />);
        expect(screen.getByText(/1/i)).toBeInTheDocument();
    });

    it('CurrencyItem snapshot', () => {
        const currencyItem = render(
            <CurrencyItem id={'USD'} currentCurrency={'USD'} value={1.234} code={'RUB'} />,
        );
        expect(currencyItem).toMatchSnapshot();
    });
});
