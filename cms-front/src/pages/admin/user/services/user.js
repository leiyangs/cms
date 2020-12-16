import request from '@/utils/request';

// get方式只能把参数拼接到url地址中进行传递
export function getUserList(data) {
  return request(`/api/user?pageNum=${data.pageNum}&pageSize=${data.pageSize}`);
}

export function createUser(data) {
  return request('/api/user', {
    method: 'post',
    body: JSON.stringify(data)
  })
}

export function updateUser(data) {
  return request(`/api/user/${data.id}`, {
    method: 'put',
    body: JSON.stringify(data)
  })
}

export function deleteUser(id) {
  return request(`/api/user/${id}`, {
    method: 'delete'
  })
}

export function multiDeleteUser(ids) {
  return request(`/api/user/${ids[0]}`, {
    method: 'delete',
    body: JSON.stringify(ids)
  })
}
