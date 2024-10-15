/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/dataBase/prisma.service';
import { MatchDto } from './dto/match.dto';

@Injectable()
export class MatchService {
  constructor (private prisma: PrismaService) {};

  async create(data: MatchDto) {
    const formattedDay = new Date(data.day).toISOString(); // Mantém o formato completo de data e hora

    // Verifique se os IDs dos usuários existem
    const userConnections = await Promise.all(
        data.userIds.map(async (userId) => {
            const user = await this.prisma.user.findUnique({ where: { id: userId } });
            if (!user) throw new Error(`User with id ${userId} not found`);
            return { userId: userId }; // Retorne a estrutura correta para a conexão
        })
    );

    // Criação do match com a conexão correta dos usuários
    const match = await this.prisma.match.create({
        data: {
            groupId: data.groupId,
            day: formattedDay,
            hour: data.hour,
            users: {
                create: userConnections.map(user => ({
                    userId: user.userId, // Use o userId aqui
                    matchId: undefined,   // O matchId é gerado automaticamente
                })),
            },
            teams: {
                connect: data.teamIds.map((teamId) => ({ id: teamId })),
            },
        },
    });

    return match;
  }

  async findAll() {
    return this.prisma.match.findMany();
  };

  async findMatchById(id: number) {
    const matchExists = await this.prisma.match.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        groupId: true,
        day: true,
        hour: true,
        teams: true,
        users: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    if(!matchExists) {
      throw new NotFoundException(`Match with ID ${id} not found!`);
    };

    return matchExists;
  };

  async update(id: number, data: MatchDto) {
    const matchExists = await this.prisma.match.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        groupId: true,
        day: true,
        hour: true,
        teams: true,
        users: true,
        createdAt: true,
        updatedAt: true,
      }
    });
  
    if(!matchExists) {
      throw new NotFoundException(`Match with ID ${id} not found!`);
    };
  
    const formattedDay = new Date(data.day).toISOString();
  
    return await this.prisma.match.update({
      data: {
        groupId: data.groupId,
        day: formattedDay,
        hour: data.hour,
        users: {
          connect: data.userIds.map(userId => ({
              userId_matchId: {
                  userId: userId,
                  matchId: id // Aqui, você usa o matchId atual
              }
          }))
        },
        teams: {
          connect: data.teamIds.map(teamId => ({ id: teamId }))
        }
      },
      where: {
        id,
      },
      select: {
        id: true,
        groupId: true,
        day: true,
        hour: true,
        teams: true,
        users: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  };

  async delete(id: number) {
    const matchExists = await this.prisma.match.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        groupId: true,
        day: true,
        hour: true,
        teams: true,
        users: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    if(!matchExists) {
      throw new NotFoundException(`Match with ID ${id} not found!`);
    };

    return await this.prisma.match.delete({
      where: {
        id,
      },
      select: {
        id: true,
        groupId: true,
        day: true,
        hour: true,
        teams: true,
        users: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  };
}
