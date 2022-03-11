/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { useConvertCurrencies } from '../hooks/useConvertCurrencies';
import { useTypedSelector } from '../hooks/useTypedSelector';

import ConverterForm from './ConverterForm';

import { ToastContainer, toast } from 'material-react-toastify';

import classes from './Converter.module.scss';

const Converter: React.FC = () => {
    const [textForConvert, setTextForConvert] = useState<string>('');

    const [numInCurrencies, setNumInCurrency] = useState<number>(0);
    const [numOutCurrencies, setNumOutCurrency] = useState<number>(0);
    const [inCurrency, setInCurrency] = useState<string>('');
    const [outCurrency, setOutCurrency] = useState<string>('');

    const [isReady, setIsReady] = useState<boolean>(false);

    const getConvertCurrencies = useConvertCurrencies();
    const { data, loading, error } = useTypedSelector((state) => state.currencies);

    useEffect(() => {
        const textReady = /([0-9]\s)([a-z]{3}\s)([in]{2}\s)([a-z]{3})$/.test(textForConvert);
        const arrText = textForConvert.split(' ');

        if (arrText.length === 4) {
            setNumInCurrency(+arrText[0]);
            setInCurrency(arrText[1].toUpperCase());
            setOutCurrency(arrText[3].toUpperCase());
        }

        if (!textReady) {
            setIsReady(true);
        } else {
            setIsReady(false);
        }
    }, [textForConvert]);

    useEffect(() => {
        if (data && data.length > 0) {
            setNumOutCurrency(numInCurrencies * +data[0].value);
        }
    }, [data]);

    useEffect(() => {
        if (error) toast.error('Валюты указаны неверно!');
    }, [error]);

    const handleSubmit = () => {
        getConvertCurrencies(inCurrency, outCurrency);
        setTextForConvert('');
    };

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextForConvert(event.target.value);
    };

    const handleReset = () => {
        setNumInCurrency(0);
        setNumOutCurrency(0);
        setInCurrency('');
        setOutCurrency('');
    };

    return (
        <div className={classes.converter}>
            <ConverterForm
                classes={classes}
                textForConvert={textForConvert}
                changeText={handleChangeText}
                handleSubmit={handleSubmit}
                isReady={isReady}
            />

            {loading && (
                <div className={classes.converterResult}>
                    <h3>Loading...</h3>
                </div>
            )}

            {!error && !loading && numOutCurrencies !== 0 && (
                <div className={classes.converterResult}>
                    Результат: {numInCurrencies} <b>{inCurrency}</b> = {numOutCurrencies.toFixed(2)}{' '}
                    <b>{outCurrency}</b>
                    <button
                        className={classes.btnReset}
                        onClick={handleReset}
                        title="Удалить запись"
                    >
                        X
                    </button>
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

export default Converter;
