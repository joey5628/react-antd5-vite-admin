import { useLocation } from 'react-router-dom';
import { Button, Flex } from 'antd';

const Index = () => {
    const location = useLocation();
    console.log('location:', location);
    return (
        <div>
            <h2>{location.pathname}</h2>
            <p>测试22222</p>
            <Flex gap="small" wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Flex>
        </div>
    );
};
export default Index;
