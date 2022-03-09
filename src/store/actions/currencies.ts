import { Dispatch } from 'redux';
import { getAllCurrenciesData, getSelectCurrenciesData } from '../../services/currencies';

import { ActionType } from '../actions/types';
import { Action } from '../actions';

export const getAllCurrencies = () => async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionType.GET_CURRENCIES,
    });
    try {
        const data = await getAllCurrenciesData()
            .then((res: any) => {
                return res;
            })
            .catch((error: any) => {
                console.log(error.message);
            });

        dispatch({ type: ActionType.GET_ALL_CURRENCIES, payload: data });
    } catch (error: any) {
        dispatch({
            type: ActionType.GET_CURRENCIES_ERROR,
            payload: error.message,
        });
    }
};

export const getSelectCurrencies = (currency: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionType.GET_CURRENCIES,
    });
    try {
        const data = await getSelectCurrenciesData(currency)
            .then((res: any) => {
                return res;
            })
            .catch((error: any) => {
                console.log(error.message);
            });

        dispatch({ type: ActionType.GET_SELECT_CURRENCIES, payload: data });
    } catch (error: any) {
        dispatch({
            type: ActionType.GET_CURRENCIES_ERROR,
            payload: error.message,
        });
    }
};
