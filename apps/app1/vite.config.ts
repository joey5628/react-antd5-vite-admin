import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import qiankun from 'vite-plugin-qiankun';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const isDev = mode === 'development';
    console.log('isDev----:', isDev);
    return {
        base: isDev ? '/' : 'http://localhost:8001', // 生产环境需指定子应用路径
        server: {
            port: 8001,
        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks: {
                        // 将 React 相关库打包成单独的 chunk 中
                        'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                        library: ['antd', 'axios'],
                        // lodash: ['lodash-es'],
                    },
                },
            },
        },
        plugins: [
            react(),
            ...(isDev ? [] : [reactRefresh()]),
            qiankun('app1', {
                useDevMode: true, // 开发环境开启热更新
            }),
        ],
        resolve: {
            alias: {
                '@': `${resolve(process.cwd(), 'src')}`,
            },
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    // modifyVars: themeVariables,
                },
            },
        },
    };
});
