import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSelectCurrencies } from '../store';

export const useSelectCurrencies = () => {
    const dispatch = useDispatch();
    return bindActionCreators(getSelectCurrencies, dispatch);
};
