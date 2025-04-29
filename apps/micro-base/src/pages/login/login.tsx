import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AlipayOutlined,
    LockOutlined,
    MobileOutlined,
    TaobaoOutlined,
    UserOutlined,
    WeiboOutlined,
} from '@ant-design/icons';
import {
    LoginFormPage,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
} from '@ant-design/pro-components';
import { message, Button, Divider, Space, Tabs, theme } from 'antd';
import type { TabsProps } from 'antd';
import type { CSSProperties } from 'react';
import loginBg from '../../assets/bg_login.jpg';
import { useUserStore } from '@/stores/index';
import * as authApi from '@/api/auth';
// import { useMessage } from '@/contexts/messageContext';
// import { message } from '@/contexts/messageContext';

type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    verticalAlign: 'middle',
    cursor: 'pointer',
};

const Login = () => {
    console.log('login---');
    // const [messageApi, contextHolder] = message.useMessage();
    // const message = useMessage();
    const [loginType, setLoginType] = useState<LoginType>('account');
    const { token } = theme.useToken();
    const { setUserInfo } = useUserStore();
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        console.log('message----:', message);
        // message.loading('加载中。。。。');
        console.log('values:', values);
        // return delay(1000).then(() => {
        //     message.success('登录成功🎉🎉🎉');
        //     setUserInfo(values);
        //     navigate('/', { replace: true });
        // });
        authApi.login(values).then((res: any) => {
            console.log('login res:', res);
            if (res.code === 0) {
                message.success('登录成功🎉🎉🎉');
                // messageApi.open({
                //     type: 'success',
                //     content: '登录成功🎉🎉🎉',
                // });
                setUserInfo(res.token);
                navigate('/', { replace: true });
            } else {
                message.error('登录失败，请重试');
                // messageApi.open({
                //     type: 'error',
                //     content: '登录失败，请重试',
                // });
            }
        });
    };

    const tabItems: TabsProps['items'] = [
        {
            key: 'account',
            label: '账号密码登录',
            children: (
                <>
                    <ProFormText
                        name="username"
                        fieldProps={{
                            size: 'large',
                            prefix: (
                                <UserOutlined
                                    style={{
                                        color: token.colorText,
                                    }}
                                    className={'prefixIcon'}
                                />
                            ),
                        }}
                        placeholder={'用户名: admin or user'}
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    />
                    <ProFormText.Password
                        name="password"
                        fieldProps={{
                            size: 'large',
                            prefix: (
                                <LockOutlined
                                    style={{
                                        color: token.colorText,
                                    }}
                                    className={'prefixIcon'}
                                />
                            ),
                        }}
                        placeholder={'密码: ant.design'}
                        rules={[
                            {
                                required: true,
                                message: '请输入密码！',
                            },
                        ]}
                    />
                </>
            ),
        },
        {
            key: 'phone',
            label: '手机号登录',
            children: (
                <>
                    <ProFormText
                        fieldProps={{
                            size: 'large',
                            prefix: (
                                <MobileOutlined
                                    style={{
                                        color: token.colorText,
                                    }}
                                    className={'prefixIcon'}
                                />
                            ),
                        }}
                        name="mobile"
                        placeholder={'手机号'}
                        rules={[
                            {
                                required: true,
                                message: '请输入手机号！',
                            },
                            {
                                pattern: /^1\d{10}$/,
                                message: '手机号格式错误！',
                            },
                        ]}
                    />
                    <ProFormCaptcha
                        fieldProps={{
                            size: 'large',
                            prefix: (
                                <LockOutlined
                                    style={{
                                        color: token.colorText,
                                    }}
                                    className={'prefixIcon'}
                                />
                            ),
                        }}
                        captchaProps={{
                            size: 'large',
                        }}
                        placeholder={'请输入验证码'}
                        captchaTextRender={(timing, count) => {
                            if (timing) {
                                return `${count} ${'获取验证码'}`;
                            }
                            return '获取验证码';
                        }}
                        name="captcha"
                        rules={[
                            {
                                required: true,
                                message: '请输入验证码！',
                            },
                        ]}
                        onGetCaptcha={async () => {
                            message.success('获取验证码成功！验证码为：1234');
                        }}
                    />
                </>
            ),
        },
    ];

    return (
        <div
            style={{
                backgroundColor: 'white',
                height: '100vh',
            }}
        >
            {/* {contextHolder} */}
            <LoginFormPage
                onFinish={onFinish}
                backgroundImageUrl={loginBg}
                logo="https://github.githubassets.com/favicons/favicon.png"
                title="Github"
                subTitle="全球最大的代码托管平台"
                activityConfig={{
                    style: {
                        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
                        color: token.colorTextHeading,
                        borderRadius: 8,
                        backgroundColor: 'rgba(255,255,255,0.25)',
                        backdropFilter: 'blur(4px)',
                    },
                    title: '活动标题，可配置图片',
                    subTitle: '活动介绍说明文字',
                    action: (
                        <Button
                            size="large"
                            style={{
                                borderRadius: 20,
                                background: token.colorBgElevated,
                                color: token.colorPrimary,
                                width: 120,
                            }}
                        >
                            去看看
                        </Button>
                    ),
                }}
                actions={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Divider plain>
                            <span
                                style={{
                                    color: token.colorTextPlaceholder,
                                    fontWeight: 'normal',
                                    fontSize: 14,
                                }}
                            >
                                其他登录方式
                            </span>
                        </Divider>
                        <Space align="center" size={24}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    height: 40,
                                    width: 40,
                                    border: '1px solid ' + token.colorPrimaryBorder,
                                    borderRadius: '50%',
                                }}
                            >
                                <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    height: 40,
                                    width: 40,
                                    border: '1px solid ' + token.colorPrimaryBorder,
                                    borderRadius: '50%',
                                }}
                            >
                                <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    height: 40,
                                    width: 40,
                                    border: '1px solid ' + token.colorPrimaryBorder,
                                    borderRadius: '50%',
                                }}
                            >
                                <WeiboOutlined style={{ ...iconStyles, color: '#1890ff' }} />
                            </div>
                        </Space>
                    </div>
                }
            >
                <Tabs
                    centered
                    items={tabItems}
                    defaultActiveKey={loginType}
                    onChange={(activeKey) => setLoginType(activeKey as LoginType)}
                />
                <div
                    style={{
                        marginBlockEnd: 24,
                    }}
                >
                    <ProFormCheckbox noStyle name="autoLogin">
                        自动登录
                    </ProFormCheckbox>
                    <a
                        style={{
                            float: 'right',
                        }}
                    >
                        忘记密码
                    </a>
                </div>
            </LoginFormPage>
        </div>
    );
};

export default Login;
