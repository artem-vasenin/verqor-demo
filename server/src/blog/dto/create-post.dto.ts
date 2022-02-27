import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'Post number one', description: 'Post title' })
  @IsString()
  @IsNotEmpty()
  @Length(5, 250)
  title: string;

  @ApiProperty({ example: 'First post short description', description: 'Post description' })
  @IsString()
  @IsNotEmpty()
  @Length(5, 500)
  description: string;

  @ApiProperty({ example: 'First post content with html tags', description: 'Post body' })
  @IsString()
  @IsNotEmpty()
  @Length(5, 5000)
  body: string;
}