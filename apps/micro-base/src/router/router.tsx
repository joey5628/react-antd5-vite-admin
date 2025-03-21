import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DashboardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

import BasicLayout from '@/layouts/Layout';
import Login from '@/pages/login/login';
import ErrorPage from '@/components/ErrorPage';
import MicroContainer from '@/pages/microContainer/index';

const Home = lazy(() => import('@/pages/index/index'));

const routes = [
    {
        path: '/',
        element: <BasicLayout />,
        // loader: '',
        children: [
            {
                /** 之所以要嵌套两层children，
                 * 是不想 ErrorPage 全屏展示，
                 * 展示ErrorPage是展示Header和Menu
                 * */
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        title: 'Dashboard',
                        icon: <DashboardOutlined />,
                        element: <Home />,
                    },
                    {
                        path: 'user',
                        title: 'User',
                        icon: <UserOutlined />,
                        element: <Home />,
                    },
                    {
                        path: 'setting',
                        title: 'Setting',
                        icon: <SettingOutlined />,
                        element: <Home />,
                    },
                    {
                        path: 'react-app/*',
                        title: 'react-app',
                        icon: <UserOutlined />,
                        element: <MicroContainer />,
                    },
                ],
            },
            {
                path: '*',
                element: <Navigate to="/" replace={true} />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
];

export { routes };

const router = createBrowserRouter(routes);
export default router;
