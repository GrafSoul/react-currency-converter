/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { useAllCurrencies } from '../hooks/useAllCurrencies';
import { useSelectCurrencies } from '../hooks/useSelectCurrencies';
import { useTypedSelector } from '../hooks/useTypedSelector';

import classes from './Currencies.module.scss';

type CurrencyProps = {
    id: string;
    code: string;
    value: number;
};

const Currencies: React.FC = () => {
    const [currentCurrency, setCurrentCurrency] = useState<string>('USD');
    const getAllCurrencies = useAllCurrencies();
    const getSelectCurrencies = useSelectCurrencies();

    const { data, loading, error } = useTypedSelector((state: any) => state.currencies);

    useEffect(() => {
        getAllCurrencies();
    }, []);

    const handleChangeCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setCurrentCurrency(event.target.value);
        getSelectCurrencies(event.target.value);
    };

    return (
        <div className={classes.currencies}>
            <form className={classes.currencyForm}>
                <label htmlFor="currency" className={classes.labelCurrency}>
                    Выберите базовую валюту
                </label>

                <select
                    onChange={handleChangeCurrency}
                    value={currentCurrency}
                    className={classes.selectCurrency}
                    name="currency"
                    id="currency"
                >
                    {!error &&
                        !loading &&
                        data.map((item: CurrencyProps) => (
                            <option key={item.id} value={item.code}>
                                {item.code}
                            </option>
                        ))}
                </select>
            </form>

            {error && <h3>{error}</h3>}

            {loading && (
                <div className={classes.currenciesLoading}>
                    <h3>Loading...</h3>
                </div>
            )}

            {!error && !loading && (
                <div className={classes.currenciesList}>
                    <ul>
                        {data.map((item: CurrencyProps) => (
                            <li key={item.id}>
                                1 <b>{currentCurrency}</b> = {item.value.toFixed(2)}{' '}
                                <b>{item.code}</b>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Currencies;
