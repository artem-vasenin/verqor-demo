import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
  getAllPosts() {
    return [1, 2, 3];
  }

  getPostById() {
    return 1;
  }

  createPost() {
    return 'created';
  }

  addComment() {
    return 1;
  }

  updatePost() {
    return 'updated';
  }

  deletePostById() {
    return 'deleted';
  }
}
