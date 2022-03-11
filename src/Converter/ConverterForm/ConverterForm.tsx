import React from 'react';

type CurrencySelectProps = {
    classes: any;
    textForConvert: string;
    isReady: boolean;
    changeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
};

const ConverterForm = ({
    classes,
    textForConvert,
    changeText,
    handleSubmit,
    isReady,
}: CurrencySelectProps) => {
    return (
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
                onChange={changeText}
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
    );
};

export default ConverterForm;
