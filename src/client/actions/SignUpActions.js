import axios from 'axios';
import * as types from '../types/types';

export const willCreateMerchant = () => {
  return {
    type: types.CREATE_MERCHANT
  };
};

export const createMerchantSuccess = () => {
  return {
    type: types.CREATE_MERCHANT_SUCCESS
  };
};

export const createMerchantFailure = () => {
  return {
    type: types.CREATE_MERCHANT_FAILURE
  };
};

export const createMerchant = (merchant) => {
  return (dispatch) => {
    dispatch(willCreateMerchant());
    return axios.post('/api/users/create', merchant).then(response => {
      dispatch(createMerchantSuccess(response.data));
    }).catch(error => {
      dispatch(createMerchantFailure());
      console.log('error', err.response.data.message);
    })
  }
}
