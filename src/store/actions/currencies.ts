import { Dispatch } from 'redux';
import { getAllCurrenciesData } from '../../services/currencies';

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

        dispatch({ type: ActionType.GET_CURRENCIES_SUCCESS, payload: data });
    } catch (error: any) {
        dispatch({
            type: ActionType.GET_CURRENCIES_ERROR,
            payload: error.message,
        });
    }
};
