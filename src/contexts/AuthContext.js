import { useState, createContext, useEffect } from "react";

import { Token, User } from "@/api";

const tokenController = new Token();
const userController = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = tokenController.getToken();
      if (!token) {
        logout();
        setLoading(false);
        return;
      }

      if (tokenController.hasExpiredToken(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
  }, []);

  const login = async (token) => {
    try {
      tokenController.setToken(token);

      const response = await userController.getMe();

      setUser(response);
      setToken(token);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const logout = () => {
    tokenController.removeToken();
    setToken(null);
    setUser(null);
  };

  const updateUser = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const data = {
    accessToken: token,
    user: user,
    login: login,
    logout: logout,
    updateUser: updateUser,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
