import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'react-app', // 与子应用名称一致
        entry: '//localhost:8001', // 子应用启动地址
        container: '#microAppContainer', // 子应用挂载容器
        activeRule: '/react-app', // 激活路由规则
        props: {
            msg: '我是来自主应用的值-react',
        },
    },
]);

start();

createRoot(document.getElementById('baseRoot')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
