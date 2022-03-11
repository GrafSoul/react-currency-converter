import React from 'react';

type CurrencyProps = {
    id: string;
    code: string;
    value: number;
    currentCurrency: string;
};

const CurrencyItem = ({ id, currentCurrency, value, code }: CurrencyProps) => {
    return (
        <li key={id}>
            1 <b>{currentCurrency}</b> = {value.toFixed(2)} <b>{code}</b>
        </li>
    );
};

export default CurrencyItem;
