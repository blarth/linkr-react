import { createContext } from "react";

const UserContext = createContext();

export function UserProvider({ children, user, setUser }) {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
