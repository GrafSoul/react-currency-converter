import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllCurrencies } from '../store/actions/currencies';

export const useAllCurrencies = () => {
    const dispatch = useDispatch();
    return bindActionCreators(getAllCurrencies, dispatch);
};
