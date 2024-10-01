import { createContext, ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/modules/user/slice';
import { AppDispatch } from '../store';
import { User } from '../types/user';

interface AuthContextType {
    user: User | null;
    login: (token: string) => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const user = localStorage.getItem('user_info');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    const login = async (token: string) => {
        console.log('--YES--');
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
