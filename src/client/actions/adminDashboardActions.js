import axios from 'axios';
import * as types from './types/types';

const willFetchMerchants = () => {
    return {
        type: types.FETCH_MERCHANTS
    }
}

const fetchMerchantsSuccess = (merchants) => {
    return {
        type: types.FETCH_MERCHANTS_SUCCESS,
        merchant
    };
};

const fetchMerchantsFailure = (error) => {
    return {
        type: types.FETCH_MERCHANTS_FAILURE,
        error
    }
}

export const fetchMerchants = () => {
    return (dispatch) => {
        dispatch(willFetchMerchants());
        return axios.get('/api/users/all').then(response => {
            dispatch(fetchMerchantsSuccess(response.data))
        }).catch((error) => dispatch(createMerchantFailure(error.response.data.message)));
    }
}
