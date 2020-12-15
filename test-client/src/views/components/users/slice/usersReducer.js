import USERS_TYPES from "./usersTypes";
import {ACTION_STATUSES} from '../../../../util/actionStatuses'

const initialState = {
    load: ACTION_STATUSES.IDLE,
    data: [],
    error: null,
};


export default function usersReducer(state = initialState, {type, payload}) {
  switch (type) {
    case USERS_TYPES.USERS_FETCH_REQUEST:
      return {
        ...state,
        load: ACTION_STATUSES.PENDING,
    };
    case USERS_TYPES.USERS_FETCH_SUCCESS:
      return {
        data: payload.data,
        load: ACTION_STATUSES.SUCCEED,
      };
    case USERS_TYPES.USERS_FETCH_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return {...state};
  }
};