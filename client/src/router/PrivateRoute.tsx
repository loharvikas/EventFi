import { Outlet, useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Cookies from 'js-cookie';
const PrivateRoute: React.FC = () => {
    const navigate = useNavigate();
    useLayoutEffect(() => {
        const token = Cookies.get('access_token');
        if (!token) {
            navigate('/signin', { replace: true });
        }
    }, []);
    if (Cookies.get('access_token')) {
        return <Outlet />;
    }
    return <div>loading..</div>;
};

export default PrivateRoute;
