import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';

export default defineConfig({
    plugins: [
        reactRefresh(),
        Vue(),
        Pages({
            extensions: ['jsx'],
            react: true,
            pagesDir: [{ dir: 'src/pages', baseRoute: '' }],
        }),
    ],
    server: {
        port: '4001',
    },
    build: {
        outDir: 'build',
        chunkSizeWarningLimit: 5000,
        base: './',
    },
    assetsPublicPath: './',
});
