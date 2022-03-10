export const convertData = (currencies: any) => {
    const arrayCurrencies = Object.values(currencies);
    const result = arrayCurrencies.map((item: any) => {
        return { ...item, id: item.code };
    });
    return result;
};
