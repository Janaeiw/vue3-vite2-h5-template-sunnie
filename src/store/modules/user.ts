import { login } from '/@/api';
import { useCookies } from '@vueuse/integrations/useCookies';
import { defineStore } from 'pinia';
import { AnyObject } from '/#/global';

const { VITE_TOKEN_KEY, MODE } = import.meta.env;
const token = useCookies().get(VITE_TOKEN_KEY as string);

interface StoreUser {
  token: string;
  info: AnyObject;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): StoreUser => ({
    token: token,
    info: {},
  }),
  getters: {
    getUserInfo(): any {
      return this.info || {};
    },
  },
  actions: {
    setInfo(info: any) {
      this.info = info ? info : '';
    },
    login(_data: any) {
      return new Promise((resolve) => {
        login(_data).then((res: any) => {
          const { result } = res;
          if (MODE == 'development') {
            this.setInfo(result);
          } else {
            this.setInfo({
              author: 'Janaeiw',
              avatar: '/vue3-vite2-h5-template-sunnie/images/avatar.jpg',
              projectAddress: 'https://github.com/Janaeiw/vue3-vite2-h5-template-sunnie',
            });
          }
          useCookies().set(VITE_TOKEN_KEY as string, result.accessToken || 'shuihaibushigeshuiage');
          resolve(result);
        });
      });
    },
  },
});
