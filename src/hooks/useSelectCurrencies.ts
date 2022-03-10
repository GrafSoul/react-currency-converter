import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSelectCurrencies } from '../store/actions/currencies';

export const useSelectCurrencies = () => {
    const dispatch = useDispatch();
    return bindActionCreators(getSelectCurrencies, dispatch);
};
