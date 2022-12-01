import { IsString } from 'class-validator';

export class PostCreateReqDTO {
  @IsString()
  title: string;

  @IsString()
  content: string;
}
