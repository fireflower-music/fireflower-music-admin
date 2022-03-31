import { post } from './request';

export const login = (username, password) => {
  return post('/login', { username, password });
};

// TODO: 01:36:29
export const search = paging => {
  return get('/user/', paging);
};
