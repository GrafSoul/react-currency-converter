import { ActionType } from './types';

type Currency = {
    id: string;
    code: string;
    value: number;
};

type GetCurrenciesAction = {
    type: ActionType.GET_CURRENCIES;
};

type GetCurrenciesSuccessAction = {
    type: ActionType.GET_CURRENCIES_SUCCESS;
    payload: Currency[];
};

type GetCurrenciesErrorAction = {
    type: ActionType.GET_CURRENCIES_ERROR;
    payload: string;
};

type GetSelectCurrenciesAction = {
    type: ActionType.GET_SELECT_CURRENCIES;
    payload: Currency[];
};

export type Action =
    | GetCurrenciesAction
    | GetCurrenciesSuccessAction
    | GetCurrenciesErrorAction
    | GetSelectCurrenciesAction;
