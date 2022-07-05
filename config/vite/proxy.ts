/**
 * @name createProxy
 * @description vite-api代理配置
 * @param viteEnv
 * https://vitejs.cn/config/#build-lib
 */

export function createProxy(viteEnv: any) {
  const { VITE_API_BASE_URL, VITE_API_TARGET_URL } = viteEnv;

  return {
    [VITE_API_BASE_URL]: {
      target: VITE_API_TARGET_URL,
      changeOrigin: true,
      rewrite: (path: any) => path.replace(new RegExp(`^${VITE_API_BASE_URL}`), ''),
    },
    // mock
    // [MOCK_API_BASE_URL]: {
    //   target: MOCK_API_TARGET_URL,
    //   changeOrigin: true,
    //   rewrite: (path:any) => path.replace(new RegExp(`^${MOCK_API_BASE_URL}`), '/api'),
    // },
  };
}
