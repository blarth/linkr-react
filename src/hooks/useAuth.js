import { useContext } from "react";
import AuthContext from "../context/authContext";

export default function useAuth() {
  return useContext(AuthContext);
}
