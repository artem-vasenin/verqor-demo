import { ApiProperty } from '@nestjs/swagger';

export class GetCommentDto {
  @ApiProperty({ example: 1, description: 'Comment ID' })
  id: number;

  @ApiProperty({ example: '2022-02-25T12:29:26.966Z', description: 'Created comment data' })
  createdAt: string;

  @ApiProperty({ example: 'Post number one', description: 'Comment name' })
  name: string;

  @ApiProperty({ example: 'First comment content with html tags', description: 'Comment body' })
  body: string;

  @ApiProperty({ example: 4, description: 'Post ID' })
  postId: number;
}