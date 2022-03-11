import React from 'react';

type CurrencyProps = {
    id: string;
    code: string;
    value: number;
};

type CurrencySelectProps = {
    classes: any;
    error: string | null;
    loading: boolean;
    currentCurrency: string;
    currencies: CurrencyProps[];
    changeCurrency: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CurrencySelect = ({
    classes,
    error,
    loading,
    currentCurrency,
    currencies,
    changeCurrency,
}: CurrencySelectProps) => {
    return (
        <form className={classes.currencyForm}>
            <label htmlFor="currency" className={classes.labelCurrency}>
                Выберите базовую валюту
            </label>

            <select
                onChange={changeCurrency}
                value={currentCurrency}
                className={classes.selectCurrency}
                name="currency"
                id="currency"
            >
                {!error &&
                    !loading &&
                    currencies.map((item: CurrencyProps) => (
                        <option key={item.id} value={item.code}>
                            {item.code}
                        </option>
                    ))}
            </select>
        </form>
    );
};

export default CurrencySelect;
