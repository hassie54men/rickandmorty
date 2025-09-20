import {
  createContext,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import axios from "axios";
interface LoginProps {
  children: ReactNode;
}

interface LoginContextType {
  user: User | null;
  error: string;
  isLog: boolean;
  login: (email: string, password: string) => Promise<string>;
  logout: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
}

export const LoginContext = createContext<LoginContextType | null>( null);

export const LoginProvider = (props: LoginProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLog, setIsLog] = useState(false);
  const [error, setError] = useState<string>('')
  const USER_KEY = "key";
  const { children } = props;

  useEffect(() => {
    const loginStorage = localStorage.getItem(USER_KEY);
    if (loginStorage) {
      const localStorageObj: User = JSON.parse(loginStorage);
      setUser(localStorageObj);
      setIsLog(true);
    } else {
      setUser(null);
      setIsLog(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = res.data
    const user = data.find((item: User) => item.email === email && item.username === password)
    // емайл = Shanna@melissa.tv
    // пароль = Antonette для проверки

    if (user) {
      setUser(user);
      setIsLog(true);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      return Promise.resolve('success')
    } else {
      console.log("неверный логин и пароль");
      setUser(null);
      setIsLog(false);
      setError(error)
      return Promise.reject('ERROR')
    }
  };

  const logout = () => {
    setUser(null);
    setIsLog(false);
    localStorage.removeItem(USER_KEY);
  };

  const value: LoginContextType = {
    user,
    isLog,
    error,
    login,
    logout,
  };

  return <LoginContext value={value}>{children}</LoginContext>;
};

