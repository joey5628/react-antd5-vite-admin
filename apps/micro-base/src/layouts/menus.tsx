import React from 'react';
import { Link } from 'react-router-dom';
import {
    DashboardOutlined,
    FormOutlined,
    CopyOutlined,
    TagsOutlined,
    UserOutlined,
    SettingOutlined,
    HomeOutlined,
} from '@ant-design/icons';

interface Item {
    key: string;
    icon: React.ReactNode;
    label?: string | React.ReactNode;
    title?: string | React.ReactNode;
}

interface Items {
    key: string;
    icon: React.ReactNode;
    label?: string | React.ReactNode;
    title?: string | React.ReactNode;
    children?: Item[];
}

interface Menu {
    key: string;
    icon: React.ReactNode;
    label: string | React.ReactNode;
}

interface Menus {
    key: string;
    icon: React.ReactNode;
    label: string | React.ReactNode;
    children?: Menu[];
}

export const items: Items[] = [
    {
        key: '/',
        icon: <DashboardOutlined />,
        label: <Link to="/">工作台</Link>,
        title: <HomeOutlined />,
    },
    {
        key: '/data',
        icon: <FormOutlined />,
        label: '数据管理',
        children: [
            {
                key: '/data/category',
                icon: <CopyOutlined />,
                label: <Link to="/article/category">分类管理</Link>,
                title: '分类管理',
            },
            {
                key: '/data/tag',
                icon: <TagsOutlined />,
                label: <Link to="/article/tag">标签管理</Link>,
                title: '标签管理',
            },
        ],
    },
    {
        key: '/user',
        icon: <UserOutlined />,
        label: <Link to="/user">用户管理</Link>,
        title: '用户管理',
    },
    {
        key: '/setting',
        icon: <SettingOutlined />,
        label: <Link to="/setting">系统设置</Link>,
        title: '系统设置',
    },
];

export const menus: Menus[] = items.map((item) => {
    const newItem = Object.assign({}, item);
    if (item.children) {
        newItem.children = item.children.map((child) => {
            return {
                key: child.key,
                icon: child.icon,
                label: child.label,
            } as Menu;
        });
    }
    delete newItem.title;
    return newItem as Menu;
});

const flattenMenus = items.reduce((i: any, menu: any): any => {
    return [
        ...i,
        {
            key: menu.key,
            title: menu.title,
        },
        ...(menu.children || []),
    ];
}, []);

export const findActiveMenu = (pathname: any) => {
    const idx = flattenMenus.findIndex((menu: { key: any }) => menu.key === pathname);
    if (idx < 0) {
        return [null, []];
    }
    const activeMenu = flattenMenus[idx];
    let breadcrumbs =
        idx > 1
            ? [
                  flattenMenus.slice(0, 1)[0],
                  ...flattenMenus.slice(1, idx).filter((menu: { key: any }) => {
                      return activeMenu.key.includes(menu.key);
                  }),
                  activeMenu,
              ]
            : [flattenMenus.slice(0, 1)[0]];

    breadcrumbs = breadcrumbs.filter((m) => !m.ignore);
    return [activeMenu, breadcrumbs];
};

// export const menus = [
//     {
//         icon: 'dashboard',
//         title: '工作台',
//         path: '/',
//     },
//     {
//         icon: 'form',
//         title: '文章管理',
//         children: [
//             {
//                 icon: 'form',
//                 title: '所有文章',
//                 path: '/article',
//             },
//             {
//                 title: '新建文章',
//                 path: '/article/editor',
//                 ignore: true,
//             },
//             {
//                 title: '编辑文章',
//                 path: '/article/editor/[id]',
//                 ignore: true,
//             },
//             {
//                 icon: 'copy',
//                 title: '分类管理',
//                 path: '/article/category',
//             },
//             {
//                 icon: 'tag',
//                 title: '标签管理',
//                 path: '/article/tags',
//             },
//         ],
//     },
//     {
//         icon: 'message',
//         title: '评论管理',
//         path: '/comment',
//     },
//     {
//         icon: 'folder-open',
//         title: '文件管理',
//         path: '/file',
//     },
//     {
//         icon: 'project',
//         title: '访问统计',
//         path: '/view',
//     },
//     {
//         icon: 'user',
//         title: '用户管理',
//         path: '/user',
//     },
//     {
//         title: '个人中心',
//         icon: 'user',
//         path: '/ownspace',
//         ignore: true,
//     },
//     {
//         icon: 'setting',
//         title: '系统设置',
//         path: '/setting',
//     },
// ];
