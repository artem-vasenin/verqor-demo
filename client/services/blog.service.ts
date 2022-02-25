import { IPost } from 'types/interfaces';

class BlogService {
  private url = `${process.env.API_URL}blog`;

  async getList(): Promise<IPost[]> {
    const response = await fetch(this.url);
    return response.json();
  }
}

export default new BlogService();