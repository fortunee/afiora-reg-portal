import * as types from '../types/types';

const initialState = { fetching: false, fetched: false, merchants: [], error: '' };

export default function adminDashboard(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_MERCHANTS:
            return Object.assign({}, state, {
                fetching: true
            });

        case types.FETCH_MERCHANTS_SUCCESS:
            return Object.assign({}, state, {
                fetching: false,
                fetched: true,
                merchants: action.merchants
            });

        case types.FETCH_MERCHANTS_FAILURE:
            return Object.assign({}, state, {
                fetching: false,
                fetched: false,
                error: action.error
            });
        default:
            return state;
    }
}