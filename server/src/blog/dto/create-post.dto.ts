import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'Post number one', description: 'Post title' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'First post short description', description: 'Post description' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'First post content with html tags', description: 'Post body' })
  @IsString()
  @IsNotEmpty()
  body: string;
}