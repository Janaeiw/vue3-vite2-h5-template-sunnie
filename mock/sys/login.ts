import { MockMethod, Recordable } from 'vite-plugin-mock';

interface response {
  body: Recordable;
  query: Recordable;
}

export default [
  {
    url: '/webapi/api/login',
    method: 'post',
    response: (_request: response) => {
      return {
        retcode: 0,
        result: {
          author: 'Janaeiw',
          avatar: '/images/avatar.jpg',
          projectAddress: 'https://github.com/zhongjunwei/vue3-vite2-h5-template-sunnie',
        },
        message: 'ok',
        type: 'success',
      };
    },
  },
] as MockMethod[];
