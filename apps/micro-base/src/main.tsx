import '@ant-design/v5-patch-for-react-19';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/reset.css';
import App from './App.tsx';
import microApp from '@micro-zoe/micro-app';
import './mock';
import '@/utils/http.ts';

microApp.start({
    // 'router-mode': 'native',
    lifeCycles: {
        created() {
            console.log('created 全局监听');
        },
        beforemount() {
            console.log('beforemount 全局监听');
        },
        mounted() {
            console.log('mounted 全局监听');
        },
        unmount() {
            console.log('unmount 全局监听');
        },
        error() {
            console.log('error 全局监听');
        },
    },
});

createRoot(document.getElementById('baseRoot')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
