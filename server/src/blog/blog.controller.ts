import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { BlogService } from 'src/blog/blog.service';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @ApiOperation({ summary: 'Get all posts list' })
  @Get()
  getAllPosts() {
    return this.blogService.getAllPosts();
  }

  @ApiOperation({ summary: 'Get post details by ID' })
  @Get(':id')
  getPostById() {
    return this.blogService.getPostById();
  }

  @ApiOperation({ summary: 'Create new post' })
  @Post()
  createPost() {
    return this.blogService.createPost();
  }

  @ApiOperation({ summary: 'Add new comment for selected post' })
  @Post('comment/:postId')
  addComment() {
    return this.blogService.addComment();
  }

  @ApiOperation({ summary: 'Update selected post' })
  @Put(':id')
  updatePost() {
    return this.blogService.updatePost();
  }

  @ApiOperation({ summary: 'Delete selected post' })
  @Delete(':id')
  deletePostById() {
    return this.blogService.deletePostById();
  }
}
