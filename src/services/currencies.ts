// API
import { API, apiKey } from './api';

const convertData = (currencies: any) => {
    const arrayCurrencies = Object.values(currencies);
    const result = arrayCurrencies.map((item: any) => {
        return { ...item, id: item.code };
    });
    return result;
};

export const getAllCurrenciesData = async () => {
    const data = await API.get(`?apikey=${apiKey}`);
    const result = convertData(data.data.data);
    return result;
};
