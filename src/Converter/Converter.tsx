import React, { useState } from 'react';

import classes from './Converter.module.scss';

const Converter: React.FC = () => {
    const [textForConvert, setTextForConvert] = useState<string>('');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(textForConvert.split(' '));
    };

    return (
        <div className={classes.converter}>
            <form className={classes.converterForm} onSubmit={onSubmit}>
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
                    onChange={(e) => setTextForConvert(e.target.value)}
                    className={classes.inputConverter}
                />
                <button className={classes.btnConverter}>Получить</button>
            </form>

            <div className={classes.converterResult}>
                Результат: 15 <b>USD</b> = 100000 <b>RUB</b>
            </div>
        </div>
    );
};

export default Converter;
