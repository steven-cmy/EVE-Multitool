import { fileURLToPath, URL } from 'node:url';
import pkg from './package.json';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
// import { visualizer } from 'rollup-plugin-visualizer';
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';

const require = createRequire(import.meta.url);

let eveVersion;
try {
  const evePkg = require('eve-esi-client-ts/package.json');
  eveVersion = evePkg.version;
} catch {
  eveVersion = 'unknown';
}

let repoUrl;
try {
  repoUrl = execSync('git remote get-url origin', { encoding: 'utf-8' })
    .trim()
    .replace(/\.git$/, '');
} catch {
  repoUrl = 'unknown';
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    // visualizer({ open: true }),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    __APP_NAME__: JSON.stringify(
      pkg.name
        .split('-')
        .map((part, i) =>
          i === 0 ? part.toUpperCase() : part.charAt(0).toUpperCase() + part.slice(1),
        )
        .join('-'),
    ),
    __APP_VERSION__: JSON.stringify(pkg.version),
    __REPO_URL__: JSON.stringify(repoUrl),
    __EVE_ESI_CLIENT_TS_VERSION__: JSON.stringify(eveVersion),
  },
});
