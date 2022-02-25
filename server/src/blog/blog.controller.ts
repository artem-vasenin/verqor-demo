import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { BlogService } from 'src/blog/blog.service';
import { CreatePostDto } from 'src/blog/dto/create-post.dto';
import { CreateCommentDto } from 'src/blog/dto/create-comment.dto';
import { GetPostDto } from 'src/blog/dto/get-post.dto';
import { GetCommentDto } from './dto/get-comment.dto';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @ApiCreatedResponse({
    description: 'The posts list has ben fetched',
    type: [GetPostDto],
  })
  @ApiOperation({ summary: 'Get all posts list' })
  @Get()
  getAllPosts() {
    return this.blogService.getAllPosts();
  }

  @ApiCreatedResponse({
    description: 'The post has ben fetched',
    type: GetPostDto,
  })
  @ApiOperation({ summary: 'Get post details by ID' })
  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.blogService.getPostById(+id);
  }

  @ApiCreatedResponse({
    description: 'The post has ben created',
    type: GetPostDto,
  })
  @ApiOperation({ summary: 'Create new post' })
  @UsePipes(new ValidationPipe())
  @Post()
  createPost(@Body() dto: CreatePostDto) {
    return this.blogService.createPost(dto);
  }

  @ApiCreatedResponse({
    description: 'The comment has ben created',
    type: GetCommentDto,
  })
  @ApiOperation({ summary: 'Add new comment for selected post' })
  @UsePipes(new ValidationPipe())
  @Post('comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.blogService.addComment(dto);
  }

  @ApiCreatedResponse({
    description: 'The post has ben updated',
    type: GetPostDto,
  })
  @ApiOperation({ summary: 'Update selected post' })
  @UsePipes(new ValidationPipe())
  @Put(':id')
  updatePost(
    @Param('id') id: string,
    @Body() dto: CreatePostDto,
  ) {
    return this.blogService.updatePost(+id, dto);
  }

  @ApiCreatedResponse({
    description: 'The post has ben deleted',
    type: GetPostDto,
  })
  @ApiOperation({ summary: 'Delete selected post' })
  @Delete(':id')
  deletePostById(@Param('id') id: string) {
    return this.blogService.deletePostById(+id);
  }
}
