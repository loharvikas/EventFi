import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { selectUser } from "../store/modules/user/selector";
import { useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useState, useTransition } from "react";
import { User } from "../types/user";
import Cookies from "js-cookie";
const PrivateRoute: React.FC = () => {

    const navigate = useNavigate()
    useLayoutEffect(() => {
      const token = Cookies.get('access_token');
      if (!token) {
        console.log('---SINGIN----')
        navigate('/signin',  { replace: true })
      }
    }, []);
    if (Cookies.get('access_token')) {
      
    return <Outlet />;

    }
    return <div>loading..</div>

};

export default PrivateRoute;