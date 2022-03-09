import { ActionType } from '../actions/types';
import { Action } from '../actions';

type Currency = {
    id: string;
    code: string;
    value: number;
};

type Currencies = {
    loading: boolean;
    error: string | null;
    data: Currency[] | [];
};

const initialState = {
    loading: false,
    error: null,
    data: [],
};

const reducer = (state: Currencies = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_CURRENCIES:
            return { loading: true, error: null, data: [] };

        case ActionType.GET_CURRENCIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };

        case ActionType.GET_CURRENCIES_ERROR:
            return { loading: false, error: action.payload, data: [] };

        case ActionType.GET_SELECT_CURRENCIES:
            return { loading: false, error: null, data: action.payload };

        default:
            return state;
    }
};

export default reducer;
