import jwtDecode from "jwt-decode";

export class Token {
  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  removeToken() {
    localStorage.removeItem("token");
  }

  hasExpiredToken(token) {
    const tokenDecoded = jwtDecode(token);
    const expiredDate = tokenDecoded.exp * 1000;
    const currentDate = new Date().getTime();

    if (currentDate > expiredDate) {
      return true;
    }

    return false;
  }
}
