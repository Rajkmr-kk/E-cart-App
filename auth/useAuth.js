import { useContext } from "react";
import AuthContext from "./context";
import storage from "../auth/storage";
import jwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    storage.removeToken();
  };

  const Login = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    storage.storeToken(authToken);
  };

  return { user, setUser, logout, Login };
};
