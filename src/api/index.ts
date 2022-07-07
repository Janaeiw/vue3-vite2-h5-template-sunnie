import request from '/@/utils/request';

// 登录
export function login(data: any) {
  return request(<any>{
    url: '/login',
    method: 'POST',
    data,
    loading: true,
  });
}
