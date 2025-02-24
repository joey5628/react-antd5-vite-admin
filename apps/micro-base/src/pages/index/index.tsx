import { useLocation } from 'react-router-dom';

const Index = () => {
    const location = useLocation();
    console.log('location:', location);
    return <div>{location.pathname}</div>;
};
export default Index;
