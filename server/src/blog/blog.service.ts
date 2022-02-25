import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from 'src/blog/dto/create-post.dto';

@Injectable()
export class BlogService {
  constructor(private prismaService: PrismaService) {}

  getAllPosts() {
    return this.prismaService.post.findMany();
  }

  getPostById(id: number) {
    return this.prismaService.post.findFirst({ where: { id }});
  }

  createPost(dto: CreatePostDto) {
    return this.prismaService.post.create({ data: dto })
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
