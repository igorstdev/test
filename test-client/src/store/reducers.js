import { combineReducers } from 'redux';

import userReducer from '../views/components/user/redux/reducer';
import usersReducer from '../views/components/users/slice/usersReducer';

export default combineReducers({
  users: usersReducer,
  user: userReducer,
});