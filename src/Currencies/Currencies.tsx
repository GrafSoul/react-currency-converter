/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'material-react-toastify';

import { useAllCurrencies } from '../hooks/useAllCurrencies';
import { useSelectCurrencies } from '../hooks/useSelectCurrencies';
import { useTypedSelector } from '../hooks/useTypedSelector';

import CurrencyItem from './CurrencyItem';

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

    useEffect(() => {
        if (error) toast.error('Ошибка получения данных!');
    }, [error]);

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

            {loading && (
                <div className={classes.currenciesLoading}>
                    <h3>Loading...</h3>
                </div>
            )}

            {!error && !loading && (
                <div className={classes.currenciesList}>
                    <ul>
                        {data.map((item: CurrencyProps) => (
                            <CurrencyItem
                                id={item.id}
                                currentCurrency={currentCurrency}
                                value={item.value}
                                code={item.code}
                            />
                        ))}
                    </ul>
                </div>
            )}

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Currencies;
