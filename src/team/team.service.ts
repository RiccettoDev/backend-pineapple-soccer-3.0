import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/dataBase/prisma.service';
import { TeamDto } from './dto/team.dto';

@Injectable()
export class TeamService {

  constructor(private prisma: PrismaService) { };

  async create(data: TeamDto) {
    const team = await this.prisma.team.create({
      data: {
        name: data.name,
        groupId: data.groupId,
      }
    });

    return team;
  };

  async findAll() {
    return await this.prisma.team.findMany();
  };

  async findTeamById(id: number) {
    const teamExists = await this.prisma.team.findUnique({
      where: {
        id,
      },
      include: {
        users: true, // Inclui os usuários associados ao time
      },
    });

    if (!teamExists) {
      throw new NotFoundException(`Team with ID ${id} not found!`);
    };

    return await this.prisma.team.findUnique({
      where: {
        id
      },
      include: {
        users: true, // Inclui os usuários associados ao time
        Group: true,
      },
    });
  };

  async update(id: number, data: TeamDto) {
    const teamExists = await this.prisma.team.findUnique({
      where: {
        id,
      },
    });

    if (!teamExists) {
      throw new NotFoundException(`Team with ID ${id} not found!`);
    };

    return await this.prisma.team.update({
      data: {
        name: data.name,
        groupId: data.groupId,
      },
      where: {
        id,
      }
    });
  };

  async delete(id: number) {
    const teamExists = await this.prisma.team.findUnique({
      where: {
        id,
      }
    });

    if (!teamExists) {
      throw new NotFoundException(`Team with ID ${id} not found!`);
    };

    return await this.prisma.team.delete({
      where: {
        id,
      }
    });
  };
}
