import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
interface LoginProps {
  children: ReactNode;
}

interface LoginContextType {
  user?: User | null;
  isLog?: boolean;
  login?: (email: string, password: string) => void;
  logout?: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider = (props: LoginProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLog, setIsLog] = useState(false);
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

  const login = (email: string, password: string) => {
    const adminEmail: string = "admin";
    const adminPassword: string = "admin";
    const adminUser = {
      id: "1",
      name: "Danil",
      email: "admin@mail.ru",
    };

    if (adminEmail === email && adminPassword === password) {
      setUser(adminUser);
      setIsLog(true);
      localStorage.setItem(USER_KEY, JSON.stringify(adminUser));
    } else {
      console.log("неверный логин и пароль");
      setUser(null);
      setIsLog(false);

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
    login,
    logout,
  };

  return <LoginContext value={value}>{children}</LoginContext>;
};

export function useLogin() {
  return useContext(LoginContext);
}
