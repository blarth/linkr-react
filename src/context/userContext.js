import { createContext } from "react";

const UserContext = createContext();

export function UserProvider({ children, user, setUser }) {
  const persistedUser = JSON.parse(localStorage.getItem("user"));
  return (
    <UserContext.Provider value={{ user, setUser, persistedUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
