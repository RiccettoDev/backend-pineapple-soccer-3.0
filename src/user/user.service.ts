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
        stars: data.stars,
        position: data.position,
        force: data.force,
        attack: data.attack,
        defense: data.defense,
        kick: data.kick,
        pass: data.pass,
        headbutt: data.headbutt,
        teamId: data.teamId,
        groupId: data.groupId,
      },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        age: true,
        stars: true,
        position: true,
        force: true,
        attack: true,
        defense: true,
        kick: true,
        pass: true,
        headbutt: true,
        teamId: true,
        groupId: true,
        createdAt: true,
        updatedAt: true,
      }
    });
    return user;
  };

  async findAll() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        age: true,
        stars: true,
        position: true,
        force: true,
        attack: true,
        defense: true,
        kick: true,
        pass: true,
        headbutt: true,
        teamId: true,
        groupId: true,
        createdAt: true,
        updatedAt: true,
      }
    });
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
      },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        age: true,
        stars: true,
        position: true,
        force: true,
        attack: true,
        defense: true,
        kick: true,
        pass: true,
        headbutt: true,
        teamId: true,
        createdAt: true,
        updatedAt: true,
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
        stars: data.stars,
        position: data.position,
        force: data.force,
        attack: data.attack,
        defense: data.defense,
        kick: data.kick,
        pass: data.pass,
        headbutt: data.headbutt,
        teamId: data.teamId,
        groupId: data.groupId,
      },
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        age: true,
        stars: true,
        position: true,
        force: true,
        attack: true,
        defense: true,
        kick: true,
        pass: true,
        headbutt: true,
        teamId: true,
        groupId: true,
        createdAt: true,
        updatedAt: true,
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
      },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        age: true,
        stars: true,
        position: true,
        force: true,
        attack: true,
        defense: true,
        kick: true,
        pass: true,
        headbutt: true,
        teamId: true,
        groupId: true,
        createdAt: true,
        updatedAt: true,
      }
    });
  };

}
