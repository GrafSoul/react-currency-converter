/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { useConvertCurrencies } from '../hooks/useConvertCurrencies';
import { useTypedSelector } from '../hooks/useTypedSelector';

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
        if (data.length > 0) {
            setNumOutCurrency(numInCurrencies * +data[0].value);
        }
    }, [data]);

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
            <div className={classes.converterForm}>
                <label htmlFor="converter" className={classes.labelConverter}>
                    Введите текст по шаблону -{' '}
                    <span className={classes.textTemplate}>15 usd in rub</span>, <br />
                    указав сумму и любые из существующих валют
                </label>
                <input
                    type="text"
                    id="converter"
                    name="converter"
                    value={textForConvert}
                    onChange={handleChangeText}
                    className={classes.inputConverter}
                />
                <button
                    onClick={handleSubmit}
                    className={[classes.btnConverter, isReady ? classes.disabled : ''].join(' ')}
                    disabled={isReady}
                    title="Получить данные"
                >
                    Получить
                </button>
            </div>

            {error && (
                <div className={classes.converterResult}>
                    <h3>{error}</h3>
                </div>
            )}

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
        </div>
    );
};

export default Converter;
