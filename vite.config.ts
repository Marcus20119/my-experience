import svgr from '@svgr/rollup';
import react from '@vitejs/plugin-react-swc';
import dns from 'dns';
import { resolve } from 'path';
import postcssNesting from 'postcss-nesting';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from 'tailwindcss';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig, loadEnv } from 'vite';
import envCompatible from 'vite-plugin-env-compatible';
import vitePluginImp from 'vite-plugin-imp';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

dns.setDefaultResultOrder('verbatim');

type viteConfigProps = {
  mode: string;
};

export default ({ mode }: viteConfigProps) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // const env = process.env;

  return defineConfig({
    build: {
      sourcemap: false,
      ...(process.env.ANALYZE === 'true' && {
        rollupOptions: {
          cache: false,
          plugins: [
            visualizer({
              brotliSize: true,
              filename: 'dist/stats.html',
              gzipSize: true,
              open: true,
            }),
          ],
        },
      }),
    },
    cacheDir: '.vite',
    css: {
      postcss: {
        plugins: [postcssNesting(), tailwindcss()],
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
      },
      include: [],
    },
    plugins: [
      react(),
      envCompatible(),
      viteTsconfigPaths(),
      svgrPlugin(),
      svgr(),
      // viteSentry(),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: name => {
              if (name === 'auto-complete' || name === 'time-picker') {
                return false;
              }
              return `antd/es/${name}/style/index.js`;
            },
          },
        ],
      }),
      AutoImport({
        dts: './src/@types/auto-imports.d.ts',
        imports: ['vitest'],
      }),
    ],
    resolve: {
      alias: [
        { find: '~', replacement: resolve(__dirname, './node_modules') },
        { find: '@root', replacement: resolve(__dirname, '.') },
      ],
    },
    server: {
      open: true,
      port: 3000,
    },
  });
};
