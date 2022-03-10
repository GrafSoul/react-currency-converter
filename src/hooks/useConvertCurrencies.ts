import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getConvertCurrencies } from '../store/actions/currencies';

export const useConvertCurrencies = () => {
    const dispatch = useDispatch();
    return bindActionCreators(getConvertCurrencies, dispatch);
};
