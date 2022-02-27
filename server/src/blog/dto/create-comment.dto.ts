import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 'Ivanov Ali Petrovich', description: 'User name' })
  @IsString()
  @IsNotEmpty()
  @Length(5, 150)
  name: string;

  @ApiProperty({ example: 'Comment text with html tags', description: 'Comment body' })
  @IsString()
  @IsNotEmpty()
  @Length(5, 500)
  body: string;

  @ApiProperty({ example: 1, description: 'Post ID' })
  @IsNumber()
  @IsNotEmpty()
  postId: number;
}