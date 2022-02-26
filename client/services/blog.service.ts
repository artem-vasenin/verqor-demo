import { IPost, IPostCreate } from '../types/interfaces';

class BlogService {
  private url = `${process.env.NEXT_PUBLIC_API_URL}blog`;

  /** Get all posts */
  async getList(): Promise<IPost[]> {
    const response = await fetch(this.url);
    return response.json();
  }

  /**
   * Create new post
   * @param post - post`s data
   */
  async createPost(post: IPostCreate): Promise<IPost> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    return response.json();
  }

  /**
   * Delete selected post
   * @param id - post`s identifier
   */
  async deletePost(id: number): Promise<IPost> {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  }
}

export default new BlogService();