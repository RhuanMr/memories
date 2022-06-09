import React, { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
    const { singed } = useContext(AuthContext);
    
    return(
        singed ? <AppRoutes /> : <AuthRoutes />
    )
};

export default Routes;
