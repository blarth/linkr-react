import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState("");

  function login(authData) {
    setAuth(authData)
  }

  return (
    <AuthContext.Provider value={{ auth, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;