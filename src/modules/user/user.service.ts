import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserCreateReqDTO } from './dto/user-create.req.dto';
import { UserGetResDTO } from './dto/user-get.res.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: UserCreateReqDTO) {
    return await this.prisma.user.create({
      data: {
        userName: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
      },
    });
  }

  async findAll() {
    const users = await this.prisma.user.findMany();

    return users.map((user) => {
      const data: UserGetResDTO = {
        name: user.userName,
        email: user.email,
      };

      return data;
    });
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
