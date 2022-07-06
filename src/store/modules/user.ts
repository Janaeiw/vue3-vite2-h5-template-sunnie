import { login } from '/@/api';
import { useCookies } from '@vueuse/integrations/useCookies';
import { defineStore } from 'pinia';
import { AnyObject } from '/#/global';

const { VITE_TOKEN_KEY } = import.meta.env;
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
          this.setInfo(result);
          // useCookies().set(VITE_TOKEN_KEY as string, data.value.token);
          resolve(result);
        });
      });
    },
  },
});
