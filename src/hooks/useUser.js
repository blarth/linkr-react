import { useContext } from "react";
import UserContext from "../context/userContext";

export default function useUser() {
  return useContext(UserContext);
}
