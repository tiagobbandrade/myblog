import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  id: number;
  name: string;
  username: string;
};

type UserContextType = {
  users: User[];
  isUsersLoading: boolean;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [users, setUser] = useState<User[]>([]);
  const [isUsersLoading, setIsUsersLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsUsersLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        setIsUsersLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ users, isUsersLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) throw new Error("useContext must be used with provider");

  return context;
}
