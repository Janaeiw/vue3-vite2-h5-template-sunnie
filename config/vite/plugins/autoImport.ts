/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 * https://github.com/antfu/unplugin-auto-import
 */

import AutoImport from 'unplugin-auto-import/vite';
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export const AutoImportDeps = () => {
  return AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    imports: [
      'vue',
      'pinia',
      'vue-router',
      {
        '@vueuse/core': [],
      },
    ],
    dts: 'types/auto-imports.d.ts',
    // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
    // 生成全局声明文件，给eslint用
    eslintrc: {
      enabled: true, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
    resolvers: [
      // ElementPlusResolver()
    ],
  });
};
