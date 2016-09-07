import request from './request.js';

export function getUserName(id) {
  return request('/users/' + id).then(user =>user.name)
}
