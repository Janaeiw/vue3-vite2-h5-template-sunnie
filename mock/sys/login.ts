import { MockMethod, Recordable } from 'vite-plugin-mock';

interface response {
  body: Recordable;
  query: Recordable;
}

export function resultSuccess<T = Recordable>(data: T, { message = 'ok' } = {}) {
  return {
    retcode: 0,
    result: data,
    message,
    type: 'success',
  };
}

export default [
  {
    url: '/webapi/login',
    method: 'post',
    response: (_request: response) => {
      const info = {
        author: 'Janaeiw',
        avatar: '/images/avatar.jpg',
        projectAddress: 'https://github.com/Janaeiw/vue3-vite2-h5-template-sunnie',
      };
      return resultSuccess(info);
    },
  },
] as MockMethod[];
