import { combineReducers } from 'redux-immutable';

import auth from './reducer/auth';
import bitcoincash from './reducer/bitcoincash';

const rootReducer = combineReducers({
  auth,
  bitcoincash,
});

export default rootReducer;
