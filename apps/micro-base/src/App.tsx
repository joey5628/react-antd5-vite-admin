import { ConfigProvider } from 'antd';
import React from 'react';
import Router from '@/router/router';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
    <ConfigProvider
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
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </ConfigProvider>
);

export default App;
