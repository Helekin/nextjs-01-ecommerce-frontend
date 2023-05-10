export class Auth {
  async register(data) {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, params);

      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (err) {
      throw err;
    }
  }

  async login(data) {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/local`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, params);

      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (err) {
      throw err;
    }
  }
}
