import { takeEvery } from 'redux-saga/effects';
import { getUsersEffect } from '../views/components/users/slice/usersEffect';
import USERS_TYPES from "../views/components/users/slice/usersTypes";

export default function* sagas() {
  yield takeEvery(USERS_TYPES.USERS_FETCH_REQUEST, getUsersEffect);
}