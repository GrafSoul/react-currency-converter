import React from "react";

import classes from "./Converter.module.scss";

const Converter: React.FC = () => {
  return (
    <div className={classes.converter}>
      <form className={classes.converterForm}>
        <label htmlFor="converter" className={classes.labelConverter}>
          Введите текст по шаблону "15 usd in rub" указав свою сумму и любые из
          существующих валют
        </label>
        <input
          type="text"
          id="converter"
          name="converter"
          className={classes.inputConverter}
        />
        <button className={classes.btnConverter}>Получить</button>
      </form>

      <div className={classes.converterResult}>
        Результат: 15 USD = 100000 RUB
      </div>
    </div>
  );
};

export default Converter;
