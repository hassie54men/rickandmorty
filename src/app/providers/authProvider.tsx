import {createContext, type ReactNode, useLayoutEffect, useState} from "react";

interface AuthProviderProps {
    children: ReactNode
}

export interface AuthContextType {
    user: User | null,
    isAuth: boolean,
    login?: (email: string, password: string) => Promise<string>,
    logout?: () => void;

}

interface User {
    id: string,
    email: string,
    name: string,
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

const USER_STORAGE_KEY = 'user'

export const  AuthProvider = (props: AuthProviderProps) => {
    const {children} = props
    const [user, setUser] = useState<User | null>(null)
    const [isAuth, setIsAuth] = useState(false)


    useLayoutEffect(() => {
        const storedUser = localStorage.getItem(USER_STORAGE_KEY);

        if (storedUser) {
            const userObj: User = JSON.parse(storedUser)
            setUser(userObj)
            setIsAuth(true)
        }else {
            setUser(null)
            setIsAuth(false)
            localStorage.removeItem(USER_STORAGE_KEY)
        }

    }, []);


    const login =  async (email: string, password: string) => {
        const validEmail = 'admin@admin.com'
        const validPassword = 'admin'
        const defaultUser: User = {
            id: '123455',
            email: 'admin@admin.com',
            name: "Danil",
        }
        if (email === validEmail && password == validPassword) {
            setUser(defaultUser)
            setIsAuth(true)
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(defaultUser))
           return  Promise.resolve('Success')
        } else {
            setUser(null)
            setIsAuth(false)
            return Promise.reject('Bad credentials')
        }
    }


    const logout = () => {
        setUser(null)
        setIsAuth(false)
        localStorage.removeItem(USER_STORAGE_KEY)
    }



    const value: AuthContextType =  {
        user,
        isAuth,
        login,
        logout
    }


    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
}
