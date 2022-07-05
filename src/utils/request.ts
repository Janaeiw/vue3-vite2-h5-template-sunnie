// import { useAxios } from '@vueuse/integrations/useAxios';
// import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
// import { Toast, Dialog } from 'vant';
// // 根据环境不同引入不同api地址
// import { config } from '/@/config'

// // create an axios instance
// const instance = axios.create({
//   baseURL: config.baseApi, // url = base url + request url
//   withCredentials: false,
//   timeout: 5000,
// });

// // request interceptor
// instance.interceptors.request.use(
//   (config: AxiosRequestConfig | any) => {
//     if (config.loading) {
//       Toast.loading({
//         message: '加载中...',
//         forbidClick: true,
//         duration: 0
//       })
//     }
//     // do something before request is sent
//     // const token = store.state.user.token;

//     // if (token) {
//     //   // let each request carry token
//     //   config.headers = {
//     //     ...config.headers,
//     //     Authorization: `Bearer ${token}`
//     //   };
//     // }
//     return config;
//   },
//   (error: any) => {
//     // do something with request error
//     console.log(error); // for debug
//     return Promise.reject(error);
//   },
// );

// // response interceptor
// instance.interceptors.response.use(
//   /**
//    * If you want to get http information such as headers or status
//    * Please return  response => response
//    */

//   /**
//    * Determine the request status by custom code
//    * Here is just an example
//    * You can also judge the status by HTTP Status Code
//    */
//   (response: AxiosResponse) => {
//     // Toast.clear()
//     const res = response.data;
//     // if the custom code is not 200, it is judged as an error.
//     if (res.retcode !== 0) {
//       // token 过期
//       if (res.retcode === 401) {
//         // 警告提示窗
//         return
//       }
//       if (res.retcode == 403) {
//         Dialog.alert({
//           title: '警告',
//           message: res.msg
//         })
//         return
//       }
//       // 若后台返回错误值，此处返回对应错误对象，下面 error 就会接收
//       return Promise.reject(new Error(res.msg || 'Error'))
//     } else {
//       // 注意返回值
//       return Promise.resolve(res)
//     }
//   },
//   (error: any) => {
//     console.log('err' + error);
//     Toast.fail(error.message);
//     return Promise.reject(error.message);
//   },
// );

// /**
//  * reactive useFetchApi
//  */

// export default function useAxiosApi(url: string, config: AxiosRequestConfig) {
//   return useAxios(url, config, instance);
// }

/**
 * @description [ axios 请求封装]
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Dialog, Toast } from 'vant';
// 根据环境不同引入不同api地址
import { config } from '/@/config';

const service = axios.create({
  baseURL: config.baseApi, // url = base url + request url
  timeout: 5000,
  withCredentials: false, // send cookies when cross-domain requests
  // headers: {
  // 	// clear cors
  // 	'Cache-Control': 'no-cache',
  // 	Pragma: 'no-cache'
  // }
});

// Request interceptors
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 加载动画
    if (config.loading) {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0,
      });
    }
    // 在此处添加请求头等，如添加 token
    // if (store.state.token) {
    // config.headers['Authorization'] = `Bearer ${store.state.token}`
    // }
    return config;
  },
  (error: any) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  },
);

// Response interceptors
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // await new Promise(resovle => setTimeout(resovle, 3000))
    Toast.clear();
    const res = response.data;
    if (res.retcode !== 0) {
      // token 过期
      if (res.retcode === 401) {
        // 警告提示窗
        return;
      }
      if (res.retcode == 403) {
        Dialog.alert({
          title: '警告',
          message: res.msg,
        });
        return;
      }
      // 若后台返回错误值，此处返回对应错误对象，下面 error 就会接收
      return Promise.reject(new Error(res.msg || 'Error'));
    } else {
      // 注意返回值
      return Promise.resolve(res);
    }
  },
  (error: any) => {
    Toast.clear();
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误(400)';
          break;
        case 401:
          error.message = '未授权,请登录(401)';
          break;
        case 403:
          error.message = '拒绝访问(403)';
          break;
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`;
          break;
        case 405:
          error.message = '请求方法未允许(405)';
          break;
        case 408:
          error.message = '请求超时(408)';
          break;
        case 500:
          error.message = '服务器内部错误(500)';
          break;
        case 501:
          error.message = '服务未实现(501)';
          break;
        case 502:
          error.message = '网络错误(502)';
          break;
        case 503:
          error.message = '服务不可用(503)';
          break;
        case 504:
          error.message = '网络超时(504)';
          break;
        case 505:
          error.message = 'HTTP版本不受支持(505)';
          break;
        default:
          error.message = `连接错误: ${error.message}`;
      }
    } else {
      if (error.message == 'Network Error') {
        error.message == '网络异常，请检查后重试！';
      }
      error.message = '连接到服务器失败，请联系管理员';
    }
    Toast.fail(error.message);
    // store.auth.clearAuth()
    // store.dispatch('clearAuth')
    return Promise.reject(error);
  },
);

export default service;
