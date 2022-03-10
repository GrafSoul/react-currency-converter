// API
import { API, apiKey } from './api';
import { convertData } from '../utils/convertData';

export const getAllCurrenciesData = async () => {
    const data = await API.get(`?apikey=${apiKey}`);
    const result = convertData(data.data.data);
    return result;
};

export const getSelectCurrenciesData = async (currency: string) => {
    const data = await API.get(`?apikey=${apiKey}&base_currency=${currency}`);
    const result = convertData(data.data.data);
    return result;
};

export const getConvertCurrenciesData = async (currency: string, currencies: string) => {
    const data = await API.get(
        `?apikey=${apiKey}&base_currency=${currency}&currencies=${currencies}`,
    );
    const result = convertData(data.data.data);
    return result;
};
