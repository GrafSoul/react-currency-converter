import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllCurrencies } from '../store';

export const useAllCurrencies = () => {
    const dispatch = useDispatch();
    return bindActionCreators(getAllCurrencies, dispatch);
};
