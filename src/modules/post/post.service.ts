import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PostCreateReqDTO } from './dto/post-create.req.dto';
import { PostGetResDTO } from './dto/post-get.res.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(postCreateReqDTO: PostCreateReqDTO) {
    const data = await this.prisma.post.create({
      data: {
        ...postCreateReqDTO,
      },
    });

    if (!data) {
      throw new BadRequestException('어쩌구 에러');
    }

    return data;
  }

  async findAll() {
    const posts = await this.prisma.post.findMany();
    return posts.map((post) => new PostGetResDTO(post));
  }

  async findOne(id: number) {
    const data = await this.prisma.post.findUnique({
      where: {
        id,
      },
    });

    return new PostGetResDTO(data);
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
