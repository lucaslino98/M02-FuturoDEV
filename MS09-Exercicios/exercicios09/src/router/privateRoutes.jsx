import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth'; // Ajuste o caminho conforme necessário

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;