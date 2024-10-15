/* eslint-disable prettier/prettier */

import { Team, User } from "@prisma/client";

export class MatchDto {
  id?: number; 

  day: Date;
  hour: string;

  groupId: number;
  userIds: number[];
  teamIds: number[];

  teams: Team[];
  users: User[];

  createdAt: Date;
  updatedAt: Date;  
}