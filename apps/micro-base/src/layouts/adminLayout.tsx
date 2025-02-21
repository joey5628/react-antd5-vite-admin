import React, { FunctionComponent, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Avatar, Row, Col, Breadcrumb } from 'antd';
import {
    UserOutlined,
    PlusOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    GithubOutlined,
    CopyrightOutlined,
} from '@ant-design/icons';
import { menus, findActiveMenu } from './menus';
import './adminLayout.less';

const { Sider, Content } = Layout;

const AdminLayout: FunctionComponent = () => {
    const [collapsed, toggleCollapse] = useState(true);
    const { pathname } = useLocation();
    const [activeMenu, breadcrumbs] = findActiveMenu(pathname);

    return (
        <Layout className="container">
            <Sider className="sidebar" collapsed={true}>
                <div className="logo">
                    <Avatar src={'../assets/react.svg'} icon={<UserOutlined />} size="large" />
                    {!collapsed && <span className="logo-text">管理后台</span>}
                </div>
                <div className="create-area">
                    {!collapsed && (
                        <Link
                            to={'/article/editor'}
                            className="ant-btn ant-btn-primary ant-btn-lg ant-btn-block"
                        >
                            <PlusOutlined />
                            <span>新建文章</span>
                        </Link>
                    )}
                </div>
                <Menu
                    defaultSelectedKeys={[activeMenu && activeMenu.key]}
                    defaultOpenKeys={['dashboard']}
                    mode="inline"
                    theme="dark"
                    items={menus}
                />
            </Sider>
            <Layout className="wrapper">
                <header>
                    <Row>
                        <Col span={12}>
                            {collapsed ? (
                                <MenuUnfoldOutlined onClick={() => toggleCollapse(!collapsed)} />
                            ) : (
                                <MenuFoldOutlined onClick={() => toggleCollapse(!collapsed)} />
                            )}
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <div className="user-info"></div>
                        </Col>
                    </Row>
                </header>
                <Content className="content">
                    <header>
                        {/* <Breadcrumb>
                            {breadcrumbs.map((breadcrumb: any) => {
                                if (breadcrumb.title) {
                                    return (
                                        <Breadcrumb.Item key={breadcrumb.key}>
                                            <Link to={breadcrumb.key}>{breadcrumb.title}</Link>
                                        </Breadcrumb.Item>
                                    );
                                }
                            })}
                        </Breadcrumb> */}
                    </header>
                    <main>
                        <Outlet />
                    </main>
                    <footer>
                        <div>
                            <a
                                className="github"
                                href="https://github.com/joey5628"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <GithubOutlined />
                            </a>
                        </div>
                        <div className="copyright">
                            <p>
                                Copyright <CopyrightOutlined /> {new Date().getFullYear()} Designed
                                by
                                <a
                                    href="https://github.com/joey5628"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {' '}
                                    Joey.
                                </a>
                            </p>
                        </div>
                    </footer>
                </Content>
            </Layout>
        </Layout>
    );
};
export default AdminLayout;
