import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/api/sysuser/list',
    method: 'get',
    params
  })
}

export function login(data) {
  return request({
    url: '/api/sysuser/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/sysuser/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/sysuser/logout',
    method: 'post'
  })
}
