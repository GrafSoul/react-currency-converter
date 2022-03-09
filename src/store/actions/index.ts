import { ActionType } from './types';

type Currency = {
    id: string;
    code: string;
    value: number;
};

type GetCurrenciesAction = {
    type: ActionType.GET_CURRENCIES;
};

type GetAllCurrenciesAction = {
    type: ActionType.GET_ALL_CURRENCIES;
    payload: Currency[];
};

type GetSelectCurrenciesAction = {
    type: ActionType.GET_SELECT_CURRENCIES;
    payload: Currency[];
};

type GetCurrenciesErrorAction = {
    type: ActionType.GET_CURRENCIES_ERROR;
    payload: string;
};

export type Action =
    | GetCurrenciesAction
    | GetAllCurrenciesAction
    | GetSelectCurrenciesAction
    | GetCurrenciesErrorAction;
