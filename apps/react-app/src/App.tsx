import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
// import Router from '@/router/router';
// import { BrowserRouter } from 'react-router-dom';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';

dayjs.locale('zh-cn');

const App: React.FC = () => (
    <ConfigProvider
        locale={zhCN}
        wave={{ disabled: false }}
        theme={{
            token: {
                // // Seed Token，影响范围大
                // colorPrimary: '#00b96b',
                // borderRadius: 2,
                // // 派生变量，影响范围小
                // colorBgContainer: '#f6ffed',
            },
        }}
    >
        {/* <BrowserRouter>
            <Router />
        </BrowserRouter> */}
        <h2>子应用React App</h2>
    </ConfigProvider>
);

export default App;
