/**
 * @name ConfigPagesPlugin
 * @description 动态生成路由
 * https://github.com/hannoeru/vite-plugin-pages
 */

import Pages from 'vite-plugin-pages';

export const ConfigPagesPlugin = () => {
  return Pages({
    pagesDir: [{ dir: 'src/pages', baseRoute: '' }],
    extensions: ['vue', 'md'],
    exclude: ['**/components/*.vue'],
    nuxtStyle: true,
  });
};
