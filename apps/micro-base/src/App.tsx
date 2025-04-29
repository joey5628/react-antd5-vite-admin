import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { RouterProvider, BrowserRouter } from 'react-router-dom';
// import router from './router/router';
import Router from './router/router2';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
// import { GlobalProvider } from '@/layouts/GlobalProvider';

dayjs.locale('zh-cn');

const App: React.FC = () => (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);

export default App;
