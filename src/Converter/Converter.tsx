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
    const { data } = useTypedSelector((state: any) => state.currencies);

    useEffect(() => {
        getConvertCurrencies(inCurrency, outCurrency);
    }, []);

    const handleSubmit = () => {
        const arrText = textForConvert.split(' ');
        setNumInCurrency(+arrText[0]);
        setInCurrency(arrText[1].toUpperCase());
        setOutCurrency(arrText[3].toUpperCase());

        getConvertCurrencies(inCurrency, outCurrency);

        setTextForConvert('');
        setNumOutCurrency(+arrText[0] * data[0].value.toFixed(2));
    };

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextForConvert(event.target.value);
        const textReady = /([0-9]\s)([a-z]{3}\s)([in]{2}\s)([a-z]{3})$/.test(textForConvert);

        if (textReady) {
            setIsReady(true);
        } else {
            setIsReady(false);
        }
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
                    className={[
                        classes.btnConverter,
                        textForConvert === '' || isReady ? classes.disabled : '',
                    ].join(' ')}
                    disabled={textForConvert === '' || isReady}
                >
                    Получить
                </button>
            </div>

            <div className={classes.converterResult}>
                Результат: {numInCurrencies} <b>{inCurrency}</b> ={numOutCurrencies}
                <b>{outCurrency}</b>
            </div>
        </div>
    );
};

export default Converter;
