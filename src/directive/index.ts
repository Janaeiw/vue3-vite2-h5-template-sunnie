/*
 * @Author: ZhongJunWei
 * @Date: 2022/07/05 14:44
 * @LastEditTime: 2022/07/05 15:07
 * @LastEditors: ZhongJunWei
 * @FilePath: \vue3-vite2-h5-template-sunnie\src\directive\index.ts
 * @Description: '自定义指令'
 */

const auths: any = import.meta.globEager('./modules/*.ts');
const directives: any = {};

for (const key in auths) {
  if (Object.prototype.hasOwnProperty.call(auths, key)) {
    directives[key.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')] = auths[key].default;
  }
}

export default directives;
