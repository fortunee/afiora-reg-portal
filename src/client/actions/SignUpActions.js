import axios from 'axios';
import * as types from '../types/types';

const willCreateMerchant = () => {
  return {
    type: types.CREATE_MERCHANT
  };
};

const createMerchantSuccess = (merchant) => {
  return {
    type: types.CREATE_MERCHANT_SUCCESS,
    merchant
  };
};

const createMerchantFailure = (error) => {
  return {
    type: types.CREATE_MERCHANT_FAILURE,
    error
  };
};

export const createMerchant = (merchant) => {
  return (dispatch) => {
    dispatch(willCreateMerchant());
    return axios.post('/api/users/create', merchant).then(response => {
      dispatch(createMerchantSuccess(response.data));
    }, error => {
      dispatch(createMerchantFailure(error.response.data.message));
    })
  }
}

export default createMerchant;
