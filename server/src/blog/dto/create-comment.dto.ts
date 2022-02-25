import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 'Ivanov Ali Petrovich', description: 'User name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Comment text with html tags', description: 'Comment body' })
  @IsString()
  @IsNotEmpty()
  body: string;

  @ApiProperty({ example: 1, description: 'Post ID' })
  @IsNumber()
  @IsNotEmpty()
  postId: number;
}