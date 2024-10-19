import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { PrismaService } from 'src/dataBase/prisma.service';
import { TeamController } from './team.controller';

@Module({
  providers: [TeamService, PrismaService],
  controllers: [TeamController]
})
export class TeamModule { }
