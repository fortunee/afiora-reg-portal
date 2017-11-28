import { combineReducers } from 'redux';
import Merchant from './merchantReducer';
import adminDashboard from './adminDashboardReducer';

const rootReducer = combineReducers({
  Merchant,
  adminDashboard
});

export default rootReducer;
