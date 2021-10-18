import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        importToCDN({
            modules: [
                autoComplete('vue'),
                autoComplete('@vueuse/shared'),
                autoComplete('@vueuse/core'),
            ],
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src'),
            },
        ],
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://mp.weixin.qq.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
