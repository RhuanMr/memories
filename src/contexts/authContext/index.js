import React, {createContext, useState} from 'react';
import authContextHooks from './hooks';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const {
        user,
        setUser,
        signUp,
        signIn,
    } = authContextHooks();

    return (
        <AuthContext.Provider
            value={{ singed: !!user, user, setUser, signUp, signIn }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;