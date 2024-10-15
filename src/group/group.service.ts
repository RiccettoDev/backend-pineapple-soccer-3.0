/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { GroupDto } from './dto/group.dto';

@Injectable()
export class GroupService {
  constructor (private prisma: PrismaClient) {};

  async create(data: GroupDto) {
    const group = await this.prisma.group.create({
      data: {
        name: data.name,
      },
      select: {
        name: true,
      }
    });

    return group;
  };

  async findAll() {
    return await this.prisma.group.findMany();
  };

  async findGroupById(id: number) {
    const groupExists = await this.prisma.group.findUnique({
      where: {
        id,
      }
    });

    if(!groupExists) {
      throw new NotFoundException(`Group with ID ${id} not found!`)
    };

    return await this.prisma.group.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        teams: true,
        users: true,
        createdAt: true,
        updatedAt: true,
      }
    });
  };

  async update(id: number, data: GroupDto) {
    const groupExists = await this.prisma.group.findUnique({
      where: {
        id,
      }
    });

    if(!groupExists) {
      throw new NotFoundException(`Group with ID ${id} not found!`)
    };

    return await this.prisma.group.update({
      data: {
        name: data.name,
      },
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        teams: true,
        users: true,
        createdAt: true,
        updatedAt: true,
      }
    });
  };

  async delete(id: number) {
    const groupExists = await this.prisma.group.findUnique({
      where: {
        id,
      }
    });

    if(!groupExists) {
      throw new NotFoundException(`Group with ID ${id} not found!`)
    };

    return await this.prisma.group.delete({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        teams: true,
        users: true,
        createdAt: true,
        updatedAt: true,
      }
    })
  }
}
