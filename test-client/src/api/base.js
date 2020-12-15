const baseApi = process.env.REACT_APP_BASE_URL;

export default {
  users: () => `${baseApi}/users`,
  user: (id) => `${baseApi}/user/${id}`,
  
};
