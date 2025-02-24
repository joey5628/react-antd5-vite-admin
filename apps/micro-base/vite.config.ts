import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 8000,
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
    plugins: [react()],
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
});
