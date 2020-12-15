import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import USERS_TYPES from "./usersTypes";
import {getUsers} from '../../../../api/usersApis';

/**
 * @description - generator function for get user effects.
 */
export function* getUsersEffect() {
  try {
    const users = yield call(getUsers);
  
    console.log(users);
  
    yield put({ type: USERS_TYPES.USERS_FETCH_SUCCESS, payload: users });
  } catch (error) {
    
    console.log(error);
    yield put({ type: USERS_TYPES.USERS_FETCH_FAILURE, payload: error });
  }
}