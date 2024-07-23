import { checker as vitePlugin_checker } from 'vite-plugin-checker';
import { type UserConfig } from 'vite';

const config: UserConfig = {
  root: 'client',
  assetsInclude: 'png/**/*.png',
  build: {
    assetsInlineLimit: 0,
    outDir: 'build'
  },
  plugins: [
    vitePlugin_checker({
      typescript: true
    })
  ]
};

export default config;
