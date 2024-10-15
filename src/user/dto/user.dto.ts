/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class UserDto {
  
  @IsNotEmpty()
  @Length(5, 30)
  @IsString()
  name: string;

  @IsNotEmpty()
  @Length(5, 30)
  @IsString()
  surname: string;

  @IsNotEmpty()
  @Length(5, 30)
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 20)
  password: string;
  
  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  stars: number;

  @IsNotEmpty()
  position: string;
  
  @IsNotEmpty()
  force: number;

  @IsNotEmpty()
  attack: number;

  @IsNotEmpty()
  defense: number;

  @IsNotEmpty()
  kick: number;

  @IsNotEmpty()
  pass: number;

  @IsNotEmpty()
  headbutt: number;

  teamId?: number;

  createdAt?: Date;
  updatedAt?: Date;
}
