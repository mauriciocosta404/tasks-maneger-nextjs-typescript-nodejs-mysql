import React, { createContext, PropsWithChildren } from 'react';

interface signProps{
    email: string;
    password:string;
}

interface AuthContextProps{
    isAutenticated:boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }:PropsWithChildren ){

    const isAutenticated=false;

    async function signIn({email,password}:signProps){
        
    }

    return (
        <AuthContext.Provider value={{isAutenticated}}>
            { children }
        </AuthContext.Provider>
    )
}