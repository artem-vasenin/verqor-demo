import { IComment, IPost, IPostCreate, IPostEdit } from '../types/interfaces';
import { errorParser } from '../utils/ErrorParser';

class BlogService {
  private url = `${process.env.NEXT_PUBLIC_API_URL}blog`;

  /** Get all posts */
  async getList(): Promise<IPost[]> {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then(async (response) => {
          if (response.status >= 200 && response.status <= 300) {
            resolve(response.json());
          } else {
            throw await response.json();
          }
        })
        .catch((error) => {
          console.log(error);
          reject(errorParser(error));
        });
    });
  }

  /**
   * Get post bu ID
   * @param id - post`s identifier
   */
  async getPost(id: number): Promise<IPost> {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`)
        .then(async (response) => {
          if (response.status >= 200 && response.status <= 300) {
            resolve(response.json());
          } else {
            throw await response.json();
          }
        })
        .catch((error) => {
          console.log(error);
          reject(errorParser(error));
        });
    });
  }

  /**
   * Create new post
   * @param post - post`s data
   */
  async createPost(post: IPostCreate): Promise<IPost> {
    return new Promise((resolve, reject) => {
      fetch(this.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      })
        .then(async (response) => {
          if (response.status >= 200 && response.status <= 300) {
            resolve(response.json());
          } else {
            throw await response.json();
          }
        })
        .catch((error) => {
          console.log(error);
          reject(errorParser(error));
        });
    });
  }

  /**
   * Create new comment
   * @param comment - comment`s data
   */
  async createComment(comment: IComment): Promise<IComment> {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment),
      })
        .then(async (response) => {
          if (response.status >= 200 && response.status <= 300) {
            resolve(response.json());
          } else {
            throw await response.json();
          }
        })
        .catch((error) => {
          console.log(error);
          reject(errorParser(error));
        });
    });
  }

  /**
   * Edit selected post
   * @param post - post`s data
   */
  async updatePost(post: IPostEdit): Promise<IPost> {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      })
        .then(async (response) => {
          if (response.status >= 200 && response.status <= 300) {
            resolve(response.json());
          } else {
            throw await response.json();
          }
        })
        .catch((error) => {
          console.log(error);
          reject(errorParser(error));
        });
    });
  }

  /**
   * Delete selected post
   * @param id - post`s identifier
   */
  async deletePost(id: number): Promise<IPost> {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: 'DELETE',
      })
        .then(async (response) => {
          if (response.status >= 200 && response.status <= 300) {
            resolve(response.json());
          } else {
            throw await response.json();
          }
        })
        .catch((error) => {
          console.log(error);
          reject(errorParser(error));
        });
    });
  }
}

export default new BlogService();