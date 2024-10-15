/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [GroupService, PrismaClient],  
  controllers: [GroupController]
})
export class GroupModule {}
