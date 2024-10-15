/* eslint-disable prettier/prettier */

import { Team, User } from "@prisma/client";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class GroupDto {

  id: number;

  @IsNotEmpty()
  @Length(5, 30)
  @IsString()  
  name: string;

  users: User[];
  teams: Team[];
  
  createdAt: Date;
  updatedAt?: Date;
}