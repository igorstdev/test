import USERS_TYPES from "./usersTypes";

export function getUsersAction() {
  return { type: USERS_TYPES.USERS_FETCH_REQUEST };
}


export default {
  getUsersAction,
};
