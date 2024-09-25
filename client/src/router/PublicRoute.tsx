import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "../types/user";
import Cookies from "js-cookie";

const PublicRoute: React.FC = (children) => {
    const navigate = useNavigate()
   
    useEffect(() => {
      const token = Cookies.get('access_token');
      if (token) {
        console.log('----HOME----')
        navigate('/',  { replace: true })
      }
    }, []);
  
    return <Outlet />;
};

export default PublicRoute;