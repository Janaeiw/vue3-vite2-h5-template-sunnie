/**
 * @name createBuild
 * @description vite打包配置项
 * https://vitejs.cn/config/#build-lib
 */

export function createBuild(viteEnv) {
  const { VITE_OUTPUT_DIR } = viteEnv;
  return {
    target: 'esnext', // 浏览器兼容性
    sourcemap: false, // 是否启用
    outDir: VITE_OUTPUT_DIR, // 指定输出路径（相对于 项目根目录).
    cssCodeSplit: false, // 禁用 CSS 代码拆分,将整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    brotliSize: false, // 关闭打包计算
    minify: 'terser', // 混淆器, terser 构建后文件体积更小, esbuild
    //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 2000, // chunk 大小警告的限制（以 kbs 为单位）
    assetsDir: 'static', // 静态资源目录
    // rollup 打包配置
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
    // 压缩配置
    terserOptions: {
      compress: {
        drop_console: false, // 生产环境移除console
        drop_debugger: true, // 生产环境移除debugger
      },
    },
  };
}
