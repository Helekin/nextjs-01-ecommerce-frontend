import { authFetch } from "@/utils";

export class User {
  async getMe() {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/users/me`;

      const params = {
        headers: {
          Authorization: `Bearer `,
        },
      };

      const response = await authFetch(url, params);

      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (err) {
      throw err;
    }
  }
}
