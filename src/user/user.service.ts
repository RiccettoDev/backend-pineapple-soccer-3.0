/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/dataBase/prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: UserDto) {
    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
        age: data.age,
        teamId: data.teamId,
      },
    });
    return user;
  };

  async findAll() {
    return await this.prisma.user.findMany();
  };

  async findUserById(id: number) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      }
    });

    if(!userExists) {
      throw new NotFoundException(`User with ID ${id} not found!`);
    };

    return await this.prisma.user.findUnique({
      where: {
        id,
      }
    });
  };

  async update(id: number, data: UserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      }
    });

    if(!userExists) {
      throw new NotFoundException(`User with ID ${id} not found!`);
    };

    return await this.prisma.user.update({
      data: {
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
        age: data.age,
        teamId: data.teamId,
      },
      where: {
        id,
      }
    });
  };

  async delete(id: number) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      }
    });

    if(!userExists) {
      throw new NotFoundException(`User with ID ${id} not found!`);
    };

    return await this.prisma.user.delete({
      where: {
        id,
      }
    });
  };

}
