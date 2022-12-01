import { Post } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class PostGetResDTO {
  @Exclude() readonly id: number;
  @Exclude() readonly title: string;
  @Exclude() readonly content: string;
  @Exclude() readonly createdAt: string;
  @Exclude() readonly updatedAt: string;

  constructor(post: Post) {
    this.id = post.id;
    this.title = post.title;
    this.content = post.content;
    this.createdAt = post.createdAt.toString();
    this.updatedAt = post.updatedAt.toString();
  }
}
