import { FC } from 'react';
import { Avatar, Dropdown, Space, Badge } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
// import { GlobalContext } from '@/context/global';
import { Link } from 'react-router-dom';

const UserInfo: FC = () => {
    // const { user } = useContext(GlobalContext);
    const { nickname, avatar } = {
        nickname: 'admin',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    };

    const items: MenuProps['items'] = [
        {
            label: <Link to="/userspace">个人中心</Link>,
            key: '0',
        },
        {
            label: <Link to="/setting">系统设置</Link>,
            key: '1',
        },
        {
            label: <Link to="/login">退出登录</Link>,
            key: '2',
        },
    ];

    return (
        <Space size={25}>
            <span style={{ display: 'flex' }}>
                <Badge count={2} size="small">
                    <BellOutlined style={{ fontSize: 20 }} />
                </Badge>
            </span>
            <Dropdown className={`user-info`} menu={{ items }}>
                <Space>
                    <Avatar src={avatar} icon={<UserOutlined />} size={'small'} />
                    <span>Hi，{nickname}</span>
                </Space>
            </Dropdown>
        </Space>
    );
};
export default UserInfo;
