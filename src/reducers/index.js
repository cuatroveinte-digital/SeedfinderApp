import { combineReducers } from 'redux';

import { accountInfo } from './account-info.reducer';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { notify } from './notify.reducer';
import { seedfinder } from './seedfinder.reducer'

const rootReducer = combineReducers({
  accountInfo,
  authentication,
  registration,
  notify,
  seedfinder, 
});

export default rootReducer;