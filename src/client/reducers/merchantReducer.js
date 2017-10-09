import * as types from '../types/types';

const initialState = { creating: false, merchants: {} };

export default function merchantReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_MERCHANT:
      return [...state, {
        creating: true
      }];

    case types.CREATE_MERCHANT_SUCCESS:
      return [...state, {
        creating: false,
        merchant: action.merchant
      }];

    case types.CREATE_MERCHANT_FAILURE:
      return [...state, {
        creating: false
      }];

    default:
      return state;
  }
}
