/* eslint-disable prettier/prettier */

export type UserDto = {
  name: string;
  surname: string;
  email: string;
  password: string;
  age: number;
  teamId?: number;

  createdAt?: Date;
  updatedAt?: Date;
}
