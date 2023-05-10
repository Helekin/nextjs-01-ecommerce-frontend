export class Platform {
  async getAll() {
    try {
      const sort = "sort=order:asc";
      const populate = "populate=icon";
      const url = `${process.env.NEXT_PUBLIC_API_URL}/platforms?${populate}&${sort}`;

      const response = await fetch(url);

      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (err) {
      throw err;
    }
  }
}
