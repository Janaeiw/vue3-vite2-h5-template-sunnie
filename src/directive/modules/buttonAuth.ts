/*
 * @Author: ZhongJunWei
 * @Date: 2022/07/05 14:44
 * @LastEditTime: 2022/07/05 14:46
 * @LastEditors: ZhongJunWei
 * @FilePath: \vue3-vite2-h5-template-sunnie\src\directive\modules\buttonAuth.ts
 * @Description: '自定义指令-按钮权限'
 */

import { Toast } from 'vant';
import router from '/@/router';

const buttonAuth = (app: any) => {
  app.directive('auth', {
    mounted(el: any, binding: any, _vnode: any) {
      // console.log(el);
      // console.log(binding);
      // console.log(vnode);
      // console.log(router.currentRoute, 'router');
      const buttonAuth: any = router.currentRoute.value.meta.buttons || ['create', 'edit'] || [];
      const clickFn = () => {
        if (buttonAuth === -1) {
          Toast.fail('您没有权限进行该操作，请联系管理员！');
          return;
        }
        if (buttonAuth.length === 0) {
          if (binding.value) {
            const params = binding.value.params;
            const fn = binding.value.fn;
            fn(params);
          }
          return;
        }
        const argAuth = binding.arg.split(',');
        const justOneAuth = argAuth.some((item: any) => buttonAuth.some((atem) => item === atem.toLocaleLowerCase()));
        if (justOneAuth) {
          if (binding.value) {
            const params = binding.value.params;
            const fn = binding.value.fn;
            fn(params);
          }
          return;
        }
        Toast.fail('您没有权限进行该操作，请联系管理员！');
      };
      el.addEventListener('click', clickFn);
    },
  });
};

export default buttonAuth;
