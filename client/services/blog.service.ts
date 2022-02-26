import { IPost } from '../types/interfaces';

class BlogService {
  private url = `${process.env.NEXT_PUBLIC_API_URL}blog`;

  async getList(): Promise<IPost[]> {
    const response = await fetch(this.url);
    return response.json();
  }

  async deletePost(id: number): Promise<IPost> {
    console.log(process);
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  }
}

export default new BlogService();