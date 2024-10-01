import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const PublicRoute: React.FC = (children) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('access_token');
        if (token) {
            navigate('/', { replace: true });
        }
    }, []);

    return <Outlet />;
};

export default PublicRoute;
