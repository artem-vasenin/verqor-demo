import { ApiProperty } from '@nestjs/swagger';
import { GetCommentDto } from 'src/blog/dto/get-comment.dto';

export class GetPostDto {
  @ApiProperty({ example: 1, description: 'Post ID' })
  id: number;

  @ApiProperty({ example: '2022-02-25T12:29:26.966Z', description: 'Created post data' })
  createdAt: string;

  @ApiProperty({ example: '2022-02-25T12:29:26.966Z', description: 'Updated post data' })
  updatedAt: string;

  @ApiProperty({ example: 'Post number one', description: 'Post title' })
  title: string;

  @ApiProperty({ example: 'First post short description', description: 'Post description' })
  description: string;

  @ApiProperty({ example: 'First post content with html tags', description: 'Post body' })
  body: string;

  @ApiProperty({ example: [GetCommentDto], description: 'Post comments' })
  comments?: GetCommentDto[]
}