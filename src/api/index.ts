import request from '/@/utils/request';

/**
 * 账号密码登录
 * @returns UseAxiosReturn
 */
export function loginPassword(data: any) {
  return request({
    url: `/api/login`,
    method: 'POST',
    data,
    loading: true,
  });
}

// 登录
export function login(data: any) {
  return request({
    url: '/login',
    method: 'POST',
    data,
    loading: true,
  });
}
