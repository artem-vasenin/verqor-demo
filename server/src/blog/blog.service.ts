import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from 'src/blog/dto/create-post.dto';
import { CreateCommentDto } from 'src/blog/dto/create-comment.dto';

@Injectable()
export class BlogService {
  constructor(private prismaService: PrismaService) {}

  /** Get all posts service */
  getAllPosts() {
    return this.prismaService.post.findMany();
  }

  /**
   * Get post details by ID
   * @param id - identifier
   */
  getPostById(id: number) {
    return this.prismaService.post.findFirst({ where: { id }, include: { comments: true }});
  }

  /**
   * Add new post
   * @param dto - create post dto
   */
  createPost(dto: CreatePostDto) {
    return this.prismaService.post.create({ data: dto })
  }

  /**
   * Add new comment for post
   * @param dto - create comment dto
   */
  addComment(dto: CreateCommentDto) {
    return this.prismaService.comment.create({ data: dto });
  }

  /**
   * Get post bi ID and update
   * @param id - identifier
   * @param dto - create post dto
   */
  updatePost(id: number, dto: CreatePostDto) {
    return this.prismaService.post.update({ where: { id }, data: { ...dto } });
  }

  /**
   * Delete post from database
   * @param id - identifier
   */
  deletePostById(id: number) {
    return this.prismaService.post.delete({ where: { id } });
  }
}
