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
