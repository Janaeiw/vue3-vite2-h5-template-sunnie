/**
 * @name ConfigProgressPlugin
 * @description 构建显示进度条
 * https://github.com/jeddygong/vite-plugin-progress
 */

import progress from 'vite-plugin-progress';

export const ConfigProgressPlugin = () => {
  return progress() as Plugin;
};
