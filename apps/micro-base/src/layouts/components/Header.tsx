import React from 'react';
import { Row, Col, Typography } from 'antd';
import UserInfo from './UserInfo';

const { Text } = Typography;

const Header: React.FC = () => {
    return (
        <Row justify="space-between">
            <Col>
                <Text strong style={{ fontSize: 20 }}>
                    React Antd5 Vite Zustand Admin
                </Text>
            </Col>
            <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <UserInfo />
            </Col>
        </Row>
    );
};

export default Header;
