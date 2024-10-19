
import { IsNotEmpty, IsString, Length } from "class-validator";

export class TeamDto {

  id?: number;

  @IsNotEmpty()
  @Length(5, 30)
  @IsString()
  name: string;

  groupId: number;

  createdAt?: Date; // Pode ser opcional, para auto-gerar
  updatedAt?: Date; // Pode ser opcional, para auto-gerar
};
