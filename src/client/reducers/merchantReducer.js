import * as types from '../types/types';

const initialState = { creating: false, created: false, merchant: {}, error: '' };

export default function merchantReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_MERCHANT:
      return Object.assign({}, state, {
        creating: true
      });

    case types.CREATE_MERCHANT_SUCCESS:
      return Object.assign({}, state, {
        creating: false,
        created: true,
        merchant: action.merchant
      });

    case types.CREATE_MERCHANT_FAILURE:
      return Object.assign({}, state, {
        creating: false,
        created: false,
        error: action.error
      });

    default:
      return state;
  }
}
