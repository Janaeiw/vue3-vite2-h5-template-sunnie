/**
 * @name ConfigImageminPlugin
 * @description 一个压缩图片资产的 vite 插件
 * https://github.com/vbenjs/vite-plugin-imagemin
 */

import viteImagemin from 'vite-plugin-imagemin';

export function ConfigImageminPlugin() {
  const plugin = viteImagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false,
    },
    mozjpeg: {
      quality: 20,
    },
    optipng: {
      optimizationLevel: 7,
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          name: 'removeViewBox',
        },
        {
          name: 'removeEmptyAttrs',
          active: false,
        },
      ],
    },
  });
  return plugin;
}
