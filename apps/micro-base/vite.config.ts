import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // const isDev = mode === 'development';
    const env = loadEnv(mode, process.cwd(), ['VITE_', 'LOOP_']);
    const port = Number(env.LOOP_PORT);

    return {
        server: {
            port,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
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
    };
});
