import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
// import { GlobalProvider } from '@/layouts/GlobalProvider';

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
        {/* <GlobalProvider> */}
        <RouterProvider router={router} />
        {/* </GlobalProvider> */}
    </ConfigProvider>
);

export default App;
