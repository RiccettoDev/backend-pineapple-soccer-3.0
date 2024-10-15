/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { PrismaService } from 'src/dataBase/prisma.service';
import { MatchController } from './match.controller';

@Module({
  providers: [MatchService, PrismaService],
  controllers: [MatchController],
})
export class MatchModule {}
