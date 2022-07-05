/**
 * @name AutoRegistryComponents
 * @description 按需加载，自动引入组件
 * https://github.com/antfu/unplugin-vue-components
 */

import Components from 'unplugin-vue-components/vite';
import { VueUseComponentsResolver, VantResolver } from 'unplugin-vue-components/resolvers';

export const AutoRegistryComponents = () => {
  return Components({
    dirs: ['src/components'],
    extensions: ['vue', 'tsx', 'md'],
    deep: true,
    dts: 'types/auto-components.d.ts',
    directoryAsNamespace: false,
    globalNamespaces: [],
    directives: true,
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    resolvers: [VueUseComponentsResolver(), VantResolver()],
  });
};
