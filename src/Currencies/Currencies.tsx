import React from 'react';

import classes from './Currencies.module.scss';

const Currencies: React.FC = () => {
    return (
        <div className={classes.currencies}>
            <form className={classes.currencyForm}>
                <label htmlFor="currency" className={classes.labelCurrency}>
                    Выберите базовую валюту
                </label>

                <select className={classes.selectCurrency} name="currency" id="currency">
                    <option value="RUB">RUB</option>
                    <option value="USD">USD</option>
                    <option value="JPY">JPY</option>
                    <option value="CAD">CAD</option>
                    <option value="DKK">DKK</option>
                </select>
            </form>

            <div>
                <ul className={classes.currenciesList}>
                    <li>1 USD = 63.49 RUB</li>
                    <li>1 USD = 63.49 RUB</li>
                    <li>1 USD = 63.49 RUB</li>
                    <li>1 USD = 63.49 RUB</li>
                </ul>
            </div>
        </div>
    );
};

export default Currencies;
