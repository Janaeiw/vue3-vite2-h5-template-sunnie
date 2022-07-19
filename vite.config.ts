import { createVitePlugins } from './config/vite/plugins';
import { resolve } from 'path';
import { ConfigEnv, UserConfigExport, loadEnv } from 'vite';
import { wrapperEnv } from './config/utils';
import pkg from './package.json';
import dayjs from 'dayjs';
import { createProxy } from './config/vite/proxy';
import { createBuild } from './config/vite/build';

const { dependencies, devDependencies, name, version } = pkg;
// 应用信息
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir);
};

// https://vitejs.dev/config/
export default function ({ command, mode }: ConfigEnv): UserConfigExport {
  const isProduction = command === 'build';
  const root = process.cwd();
  const env = loadEnv(mode, root); // 加载env环境
  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env);

  const { VITE_PUBLIC_PATH } = viteEnv;

  return {
    root: root,
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    server: {
      host: true,
      hmr: true,
      proxy: createProxy(viteEnv),
    },
    plugins: createVitePlugins(isProduction),
    build: <any>createBuild(viteEnv),
    css: {
      preprocessorOptions: {
        scss: {
          // 配置 nutui 全局 scss 变量
          // additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`,
        },
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  };
}
