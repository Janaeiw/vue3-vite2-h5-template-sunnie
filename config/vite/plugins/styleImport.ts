/**
 * @name ConfigStyleImport
 * @description 按需加载，自动引入组件库样式
 * https://github.com/anncwb/vite-plugin-style-import
 */

import { createStyleImportPlugin, NutuiResolve, VantResolve } from 'vite-plugin-style-import';

type libsType = {
  libraryName?: string;
  libraryNameChangeCase?: string;
  esModule?: Boolean;
  resolveStyle?: Function;
}[];

export const ConfigStyleImport = (_isBuild: any) => {
  const libs: libsType = [
    {
      libraryName: 'vant',
      esModule: true,
      resolveStyle: (name: any) => {
        return `../es/${name}/style/index`;
      },
    },
  ];
  if (_isBuild) {
    libs.push({
      libraryName: '@nutui/nutui',
      libraryNameChangeCase: 'pascalCase',
      esModule: true,
      resolveStyle: (name: any) => {
        name = name.toLowerCase(); // NutuiResolve官方版目前在linux会造成大小写不一致问题无法加载资源
        return `@nutui/nutui/dist/packages/${name}/index.scss`;
      },
    });
  }
  return createStyleImportPlugin({
    resolves: [NutuiResolve(), VantResolve()],
    libs: <any>[...libs],
  });
};
