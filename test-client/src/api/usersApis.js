import Http from './httpRequest';
import apis from './base';

export function getUsers() {
  const usersApi = apis.users();
  return Http.get(usersApi);
}

export default {
  getUsers,
}