/**
 * @name ConfigStyleImport
 * @description 按需加载，自动引入组件库样式
 * https://github.com/anncwb/vite-plugin-style-import
 */

import { createStyleImportPlugin, NutuiResolve, VantResolve } from 'vite-plugin-style-import';

export const ConfigStyleImport = () => {
  return createStyleImportPlugin({
    resolves: [NutuiResolve(), VantResolve()],
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => {
          return `../es/${name}/style/index`;
        },
      },
    ],
  });
};
