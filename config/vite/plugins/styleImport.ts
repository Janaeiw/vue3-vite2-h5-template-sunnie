/**
 * @name ConfigStyleImport
 * @description 按需加载，自动引入组件库样式
 * https://github.com/anncwb/vite-plugin-style-import
 */

import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';

export const ConfigStyleImport = () => {
  return createStyleImportPlugin({
    resolves: [VantResolve()],
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => {
          return `../es/${name}/style/index`;
        },
      },
      {
        libraryName: '@nutui/nutui',
        esModule: true,
        resolveStyle: (name) => {
          name = name.toLowerCase().replace('-', ''); //NutuiResolve官方版目前在linux会造成大小写不一致问题无法加载资源
          return `@nutui/nutui/dist/packages/${name}/index.scss`;
        },
      },
    ],
  });
};
