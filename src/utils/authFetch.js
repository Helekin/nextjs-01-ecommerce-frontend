import { Token } from "@/api";

export async function authFetch(url, params) {
  const tokenController = new Token();
  const token = tokenController.getToken();

  const logout = () => {
    tokenController.removeToken();
    window.location.replace("/");
  };

  if (!token) {
    logout();
  } else {
    if (tokenController.hasExpiredToken(token)) {
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        return await fetch(url, paramsTemp);
      } catch (err) {
        return err;
      }
    }
  }
}
